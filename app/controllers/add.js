import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  storageSvc: service('storage'),

  actions: {
    goHome () {
      this.storageSvc.clearFormData();
      this.transitionToRoute('campgrounds');
    },

    submitCreate (body) {
      const obj = { name: body };
      const post = this.store.createRecord('campground', obj);

      post.save().then(() => {
        this.storageSvc.storeUpdatedData(obj);
        this.transitionToRoute('campgrounds');
      });
    }
  }
});
