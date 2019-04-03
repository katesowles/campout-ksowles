import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  // NOTE: i'm sure there MUST be a better way to do this that doens't involve the ember-view tag to reload with the same data
  storageSvc: service('storage'),

  model () {
    return {
      list: this.storageSvc.items
    };
  }
});
