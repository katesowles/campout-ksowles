import Component from '@ember/component';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Component.extend({
  storageSvc: service('storage'),

  actions: {
    updateModel (body) {
      this.storageSvc.storeFormData(body);
    },

    submitForm (body) {
      this.storageSvc.clearFormData();
      $('#formModal').modal('hide');

      this.submit(body);
    }
  }
});
