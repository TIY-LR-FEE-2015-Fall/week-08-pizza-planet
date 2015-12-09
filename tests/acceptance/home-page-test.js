import { test } from 'qunit';
import moduleForAcceptance from 'pizza-planet/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home page');

test('visting the home page shows some pizzas', function(assert) {
  // Fill up the database with 6 pizzas
  server.createList('pizza', 6);
  visit('/');

  andThen(function() {
    var pizzas = find('.pizza-list').children();

    assert.equal(pizzas.length, 6, 'There should be 6 pizzas here dog.');
    assert.equal(pizzas.first().html(), 'Pepperoni', 'The first pizza should be Pepperoni');
    assert.ok(pizzas.first().html().indexOf('Pepperoni') !== -1, 'The first pizza should be Pepperoni');
  });
});

test('a user can navigate to the login screen', function(assert) {
  visit('/');

  click('.nav .login-btn');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
