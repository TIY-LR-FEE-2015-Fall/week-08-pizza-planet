import { test } from 'qunit';
import moduleForAcceptance from 'pizza-planet/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login page');

test('User can login with proper credentials', function(assert) {
  visit('/login');

  fillIn('.login-input--username', 'ryan@theironyard.com');
  fillIn('.login-input--password', 'password');
  click('.login-submit');

  andThen(function() {
    assert.equal(currentURL(), '/admin');
  });
});

test('User cannot login with invalid credentials', function(assert) {
  visit('/login');

  fillIn('.login-input--username', 'ryan@google.com');
  fillIn('.login-input--password', 'fail');
  click('.login-submit');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
