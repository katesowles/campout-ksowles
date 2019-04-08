import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('campground', params.campground_id)
  }
});
