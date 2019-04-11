import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  storageSvc: service('storage'),

  actions: {
    toggleSidebar () {
      this.storageSvc.toggleSidebar();
    }
  },

  didRender () {
    const state = localStorage.getItem('sidebarShow');
    const stateIsDefined = state !== undefined && state !== null;
    const normalizedState = this.storageSvc.normalizeBoolean(state);

    if (stateIsDefined) {
      this.storageSvc.setSidebarState(normalizedState);
    }
  }
});
