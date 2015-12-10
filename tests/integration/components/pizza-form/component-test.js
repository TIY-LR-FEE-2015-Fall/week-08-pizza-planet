import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pizza-form', 'Integration | Component | pizza form', {
  integration: true
});

test('it renders a form with the right inputs', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{pizza-form}}`);

  assert.equal(this.$('.pizza-input').length, 1, 'There should be one .pizza-input');
  assert.equal(this.$('.pizza-submit').text().trim(), 'Submit');
});

test('it captures user input', function(assert) {
  let input = {name: 'Sausage'};

  this.on('captureSubmit', assertInput);
  this.render(hbs`{{pizza-form onsubmit='captureSubmit'}}`);

  this.$('.pizza-input--name').val(input.name);
  this.$('input').change();

  this.$('button').click();

  function assertInput(data) {
    assert.deepEqual(data, input);
  }
});
