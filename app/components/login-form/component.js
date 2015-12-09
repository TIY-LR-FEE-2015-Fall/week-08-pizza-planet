import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',

  submit(ev) {
    ev.preventDefault();

    // Grab user input
    var input = this.getProperties('username', 'password');

    // Fire action onsubmit with input data
    this.sendAction('onsubmit', input);
  },
});
