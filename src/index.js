class ObjectQL {
  constructor(data) {
    this.data = data;
  }

  query(statement) {
    const propertiesString = statement.split('select ')[1];
    const properties = propertiesString.split(' from ')[0].split(',');
    const from = this.extractFrom(statement);
    const result = properties.reduce((prev, current) => {
      const propName = current.trim();

      prev[propName] = from.target[propName];

      return prev;
    }, {});
    
    if (from.name) {
      return {[from.name]: result};
    }

    return result;
  }

  extractFrom(statement) {
    const fromString = statement.split(' from ');
    const name = fromString[1] ? fromString[1].trim() : '';
    const target = name ? this.data[name] : this.data;

    return {name, target};
  }
}