import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  storageSvc: service('storage'),

  // NOTE: i'm sure there MUST be a better way to do this that doens't involve the ember-view tag to reload with the same data
  model () {
    return {
      list: this.storageSvc.items,
    }
  }
});
