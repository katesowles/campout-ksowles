import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  storageSvc: service('storage'),

  model () {
    return this.store.findAll('campground');
  }
});
