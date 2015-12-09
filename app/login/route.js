import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loginUser(data) {
      // Talk to the server
      Ember.$.ajax({
        url: '/login',
        method: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(data),
      }).then(() => {
        // Redirect to the admin area
        this.transitionTo('admin');
      });
    },
  },
});
