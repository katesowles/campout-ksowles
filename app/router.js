import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('campgrounds', function() {
    this.route('show', { path: '/:campground_id' });
  });
  this.route('add', { path: 'campgrounds/add' });
});

export default Router;
