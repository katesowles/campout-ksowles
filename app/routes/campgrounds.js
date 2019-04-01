import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  //will load the service in file /app/services/storage.js
  storageSvc: service('storage'),

  model () {
    return this.storageSvc.starters;
  }
});
