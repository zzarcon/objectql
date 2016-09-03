describe('ObjectQL', function() {
  it('Can query any object properties', function() {
    const obj = new ObjectQL({
      name: 'hector'
    });
    const obj2 = new ObjectQL({
      name: 'leon'
    });

    assert.deepEqual(obj.query('select name'), {name: 'hector'});
    assert.deepEqual(obj2.query('select name'), {name: 'leon'});
  });

  it('Can query multiple properties at once', function() {
    const obj = new ObjectQL({
      name: 'hector',
      lastName: 'zarco',
      secondName: 'leon'
    });

    assert.deepEqual(obj.query('select name, lastName'), {name: 'hector', lastName: 'zarco'});
  });

  it('Can query nested properties', function() {
    const obj = new ObjectQL({
      user: {
        name: 'hector',
        lastName: 'zarco'
      },
      city: {
        name: 'Valencia'
      }
    });

    assert.deepEqual(obj.query('select name from city'), {
      city: {name: 'Valencia'}
    });
    assert.deepEqual(obj.query('select name, lastName from user'), {
      user: {name: 'hector', lastName: 'zarco'}
    });
  });

  it.skip('Allow queries on Collections', function() {

  });
  it.skip('Should fail if the query is malformed', function() {

  });
});