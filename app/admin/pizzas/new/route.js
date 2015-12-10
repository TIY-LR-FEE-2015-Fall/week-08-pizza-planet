import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    savePizza(data) {
      // Save a pizza
      var pizza = this.store.createRecord('pizza');

      pizza.setProperties(data);
      pizza.save().then(() => {
        this.transitionTo('admin.pizzas');
      });
    },
  },
});
