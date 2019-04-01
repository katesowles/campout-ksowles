import Service from '@ember/service';

export default Service.extend({
  items: null,
  starters: null,

  init () {
    this._super(...arguments);
    // NOTE: initting some starter data here for simplicity sake
    // looks like the proper way to do this is with Mirage?
    this.set('starters', [
      {
        "id": "beaver-bay",
        "name": "Beaver Bay Campground",
        "city": "Cougar",
        "state": "WA"
      },
      {
        "id": "cape-lookout",
        "name": "Cape Lookout State Park",
        "city": "Tillamook",
        "state": "OR"
      },
      {
        "id": "cove-palisades",
        "name": "Cove Palisades State Park",
        "city": "Culver",
        "state": "OR"
      },
      {
        "id": "crescent-lake",
        "name": "Crescent Lake Campground",
        "city": "Crescent",
        "state": "OR"
      },
      {
        "id": "deschutes-river",
        "name": "Deschutes River State Recreation Area",
        "city": "Wasco",
        "state": "OR"
      },
      {
        "id": "detroit-lake",
        "name": "Detroit Lake State Recreation Area",
        "city": "Detroit",
        "state": "OR"
      },
      {
        "id": "devils-lake",
        "name": "Devil's Lake State Recreation Area",
        "city": "Lincoln City",
        "state": "OR"
      },
      {
        "id": "fort-stevens",
        "name": "Fort Stevens State Park",
        "city": "Hammond",
        "state": "OR"
      },
      {
        "id": "south-beach",
        "name": "South Beach State Park",
        "city": "Newport",
        "state": "OR"
      },
      {
        "id": "timothy-lake",
        "name": "Timothy Lake Campground",
        "city": "Clackamas County",
        "state": "OR"
      }
    ])
    this.set('items', this.starters)
  },
});
