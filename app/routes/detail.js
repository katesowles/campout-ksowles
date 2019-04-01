import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  storageSvc: service('storage'),

  model (params) {
    return this.storageSvc.starters.find(x => x.id === params.campground_id);
  }
});
