import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      'Pepperoni',
      'Mushroom',
      'Cheese',
      'Veggie',
      'Pineapple',
      'BBQ Chicken',
    ];
  },
});
