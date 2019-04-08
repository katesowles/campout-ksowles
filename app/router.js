import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('campgrounds');
  this.route('add', { path: 'campgrounds/add' });
});

export default Router;
