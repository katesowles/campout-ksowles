import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  storageSvc: service('storage'),

  model (params) {

    // NOTE: i'm sure there MUST be a better way to do this that doens't involve the ember-view tag to reload with the same data
    return {
      list: this.storageSvc.items,
      detail: this.storageSvc.items.find(x => x.id === params.campground_id)
    }
  }
});
