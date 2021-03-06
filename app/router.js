import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('admin', function() {
    this.route('pizzas', function() {
      this.route('new');
      this.route('edit', {path: '/:pizza_id/edit'});
    });
  });
});

export default Router;
