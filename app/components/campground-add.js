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
    },
  },

  didRender () {
    console.log('true');
    this.storageSvc.updateAddRouteFlag(true); // specifically for Add route in mobile-size view
  },

  willClearRender () {
    console.log('false');
    this.storageSvc.updateAddRouteFlag(false); // specifically for Add route in mobile-size view
  }
});
