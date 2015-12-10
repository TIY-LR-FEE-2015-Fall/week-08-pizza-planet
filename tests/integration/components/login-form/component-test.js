import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('login-form', 'Integration | Component | login form', {
  integration: true,
});

test('it renders', function(assert) {
  this.render(hbs`{{login-form}}`);

  assert.equal(this.$('input').length, 2, 'It should render two inputs');
  assert.equal(this.$('button').text().trim(), 'Submit', 'It should have a submit button');
});

test('it captures user input', function(assert) {
  this.render(hbs`{{login-form onsubmit='handleSubmit'}}`);

  // Register listener for `handleSubmit`
  this.on('handleSubmit', function(data) {
    // Check that form sends out input on submit
    assert.equal(data.username, 'username');
    assert.equal(data.password, 'pass');
  });

  // Fill in the form
  this.$('input').eq(0).val('username');
  this.$('input').eq(1).val('pass');

  // Fire change events on all inputs to fake user input
  this.$('input').change();

  // Fire ze missles!!!
  this.$('button').click();
});
