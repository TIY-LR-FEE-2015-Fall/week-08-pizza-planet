import { test } from 'qunit';
import moduleForAcceptance from 'pizza-planet/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home page');

test('visiting visting the home page shows some pizzas', function(assert) {
  visit('/');

  andThen(function() {
    var pizzas = find('.pizza-list').children();

    assert.equal(pizzas.length, 6, 'There should be 6 pizzas here dog.');
    assert.ok(pizzas.first().html().includes('Pepperoni'), 'The first pizza should be Pepperoni');
  });
});