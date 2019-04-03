import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  // NOTE: i'm sure there MUST be a better way to do this that doens't involve the ember-view tag to reload with the same data
  storageSvc: service('storage'),

  // NOTE: i'm sure there MUST be a better way to do this that doesn't involve the ember-view tag to reload with the same data
  model () {
    return {
      list: this.storageSvc.items,
      campground: {
        name: '',
        city: '',
        state: '',
      }
    }
  }
});
