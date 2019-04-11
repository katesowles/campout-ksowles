import Component from '@ember/component';
import { inject as service } from '@ember/service';


export default Component.extend({
  storageSvc: service('storage'),

  actions: {
    updateModel (body) {
      this.storageSvc.storeFormData(body);
    },

    submitCreate (body) {
      alert('body: ' + body);
      alert('model: ' + this.model);
    }
  }
});
