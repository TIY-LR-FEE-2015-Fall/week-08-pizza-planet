import { test } from 'qunit';
import moduleForAcceptance from 'pizza-planet/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | pizzas/index');

test('visiting admin pizza index works', function(assert) {
  visit('/admin/pizzas');

  andThen(function() {
    assert.equal(currentURL(), '/admin/pizzas');
  });
});

test('Admin should be able to see a table of pizzas', function(assert) {
  // Arrange
  server.createList('pizza', 6); // Adds 6 Pizzas to our API
  visit('/admin/pizzas');

  // Assert
  andThen(function() {
    // Get the first `.pizza-table__row`
    var firstPizza = findWithAssert('.pizza-table__row').first();

    assert.ok(firstPizza.text().indexOf('1') > -1, 'The first pizza should have an id of 1');
    assert.ok(firstPizza.text().indexOf('Pepperoni') > -1, 'The first pizza should be Pepperoni');

    assert.equal(findWithAssert('.pizza-table__row').length, 6, 'There should be a .pizza-table__row for every item in our server');
  });
});

test('Admin should be able to navigate to the new pizza page', function(assert) {
  // Arrange
  visit('/admin/pizzas');

  // Act
  click('.pizza-new-btn');

  // Assert
  andThen(function() {
    assert.equal(currentURL(), '/admin/pizzas/new');
  });
});
