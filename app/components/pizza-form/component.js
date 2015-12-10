import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',

  submit(ev) {
    ev.preventDefault();

    var data = this.getProperties('name');

    this.sendAction('onsubmit', data);
  },
});
