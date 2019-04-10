import Component from '@ember/component';

export default Component.extend({
  actions: {
    updateModel (body) {
      alert('inline here: ' + body)
    },

    submitCreate (body) {
      alert('body: ' + body);
      alert('model: ' + this.model);
    }
  }
});
