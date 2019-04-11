import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  actions: {
    closeModal () {
      $('#formModal').modal('hide');
      this.close(); // passed in from Add route view, executed in the Add controller
    }
  },

  didRender () {
    $('#formModal').modal('show')
  }
});
