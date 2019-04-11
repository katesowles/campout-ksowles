import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  storageSvc: service('storage'),

  actions: {
    resetLocalStorage () {
      this.storageSvc.clearLocalStorage();
      window.location.reload(true);
    }
  }
});
