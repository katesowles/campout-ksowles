import Service from '@ember/service';
import { get, set } from '@ember/object';

export default Service.extend({
  items: null,
  starters: null,
  sidebarActive: false,

  init () {
    this._super(...arguments);
    // NOTE: initting some starter data here for simplicity sake
    // looks like the proper way to do this is with Mirage?
    this.set('starters', [
      {
        "id": 1,
        "name": "Beaver Bay Campground",
        "city": "Cougar",
        "state": "WA"
      },
      {
        "id": 2,
        "name": "Cape Lookout State Park",
        "city": "Tillamook",
        "state": "OR"
      },
      {
        "id": 3,
        "name": "Cove Palisades State Park",
        "city": "Culver",
        "state": "OR"
      },
      {
        "id": 4,
        "name": "Crescent Lake Campground",
        "city": "Crescent",
        "state": "OR"
      },
      {
        "id": 5,
        "name": "Deschutes River State Recreation Area",
        "city": "Wasco",
        "state": "OR"
      },
      {
        "id": 6,
        "name": "Detroit Lake State Recreation Area",
        "city": "Detroit",
        "state": "OR"
      },
      {
        "id": 7,
        "name": "Devil's Lake State Recreation Area",
        "city": "Lincoln City",
        "state": "OR"
      },
      {
        "id": 8,
        "name": "Fort Stevens State Park",
        "city": "Hammond",
        "state": "OR"
      },
      {
        "id": 9,
        "name": "South Beach State Park",
        "city": "Newport",
        "state": "OR"
      },
      {
        "id": 10,
        "name": "Timothy Lake Campground",
        "city": "Clackamas County",
        "state": "OR"
      }
    ])
    this.set('items', this.starters)
  },

  toggleSidebar () {
    const bool = get(this, 'sidebarActive') === true ? false : true;

    set(this, 'sidebarActive', bool);
  }
});
