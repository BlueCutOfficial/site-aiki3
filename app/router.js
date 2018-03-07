import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('aikido');
  this.route('club');
  this.route('practice');
  this.route('links');
  this.route('stages');
});

export default Router;
