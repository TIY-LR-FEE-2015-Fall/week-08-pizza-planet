import { test } from 'qunit';
import moduleForAcceptance from 'pizza-planet/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | pizzas/new');

test('Admin can visit new pizza form', function(assert) {
  visit('/admin/pizzas/new');

  andThen(function() {
    assert.equal(currentURL(), '/admin/pizzas/new');
  });
});

test('Admin should not see a table of pizzas when creating a new pizza', function(assert) {
  visit('/admin/pizzas/new');

  andThen(function() {
    var pizzaTable = find('.pizza-table');

    assert.equal(pizzaTable.length, 0);
  });
});

test('Admin can create a new pizza', function(assert) {
  let pizzaName = 'Sausage';

  visit('/admin/pizzas/new');

  fillIn('.pizza-input--name', pizzaName);
  click('.pizza-submit');

  andThen(function() {
    // See that we've saved the pizza model to the server
    assert.equal(server.db.pizzas[0].name, pizzaName, `The pizza should save it's name`);

    // We've been redirected because our pizza is saved
    assert.equal(currentURL(), '/admin/pizzas');

    // See the name of the pizza in .pizza-table__row
    var firstPizzaRow = find('.pizza-table__row').first();

    assert.ok(firstPizzaRow.text().indexOf(pizzaName) > -1, 'See the name of the new pizza in .pizza-table__row');
  });
});
