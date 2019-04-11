import Service from '@ember/service';
import { get, set } from '@ember/object';

export default Service.extend({
  sidebarActive: false,

  init () {
    this._super(...arguments);
  },

  toggleSidebar () {
    let bool, normalizedReversedState;
    const state = localStorage.getItem('sidebarShow')
    const stateIsDefined = state !== undefined && state !== null;

    switch (stateIsDefined) {
      case true:
        normalizedReversedState = !this.normalizeBoolean(state);
        this.updateSidebarState(normalizedReversedState);
        break;
      default:
        bool = !get(this, 'sidebarActive'); // reverse the current condition of sidebarActive
        this.updateSidebarState(bool);
    }
  },

  normalizeBoolean (value) {
    return value === 'true' ? true : false;
  },

  updateSidebarState (bool) {
    this.setSidebarState(bool);
    this.storeSidebarState(bool.toString());
  },

  setSidebarState (bool) {
    set(this, 'sidebarActive', bool);
  },

  storeSidebarState (bool) {
    localStorage.setItem('sidebarShow', bool);
  },

  getFormData () {
    return localStorage.getItem('formData') || '';
  },

  storeFormData (text) {
    localStorage.setItem('formData', text);
  },

  clearFormData () {
    localStorage.removeItem('formData');
  },

  storeUpdatedData (data) {
    const localDb = localStorage.getItem('localDb');

    if (localDb) {
      const parsedDb = JSON.parse(localDb);
      parsedDb.push(data);
      localStorage.setItem('localDb', JSON.stringify(parsedDb));
    } else {
      const newData = [ data ];
      localStorage.setItem('localDb', JSON.stringify(newData));
    }
  },

  clearLocalStorage () {
    localStorage.clear();
  }
});
