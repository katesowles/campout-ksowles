import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  actions: {
    closeModal () {
      $('#formModal').modal('hide');
      // this.transitionTo('campgrounds')
      // figure out how to trigger this from component, where router isn't accessible... maybe controller?
    },

    updateModel (body) {
      alert('modal here: ' + body)
    },

    submitCreate (body) {
      alert('body: ' + body);
      alert('model: ' + this.model);
    }
  },

  didRender () {
    $('#formModal').modal('show')
  }
});
