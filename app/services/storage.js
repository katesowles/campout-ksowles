import Service from '@ember/service';
import { get, set } from '@ember/object';

export default Service.extend({
  sidebarActive: false,

  init () {
    this._super(...arguments);
  },

  toggleSidebar () {
    const bool = get(this, 'sidebarActive') === true ? false : true;

    set(this, 'sidebarActive', bool);
  }
});
