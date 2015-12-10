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
  // Arrange
  var input = {username: 'username', password: 'pass'};
  this.render(hbs`{{login-form onsubmit='handleSubmit'}}`);

  // Register listener for `handleSubmit`
  this.on('handleSubmit', assertFormValues);

  // Act/Run
  // Fill in the form
  this.$('input').eq(0).val(input.username);
  this.$('input').eq(1).val(input.password);

  // Fire change events on all inputs to fake user input
  this.$('input').change();

  // Fire ze missles!!!
  this.$('button').click();

  // Assert
  // This will be hoisted to the top
  function assertFormValues(data) {
    // Check that form sends out input on submit
    assert.deepEqual(data, input);
  }
});
