import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    closeModal () {
      this.transitionToRoute('campgrounds');
    },
  }
});
