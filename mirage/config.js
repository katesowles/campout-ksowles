export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */

  // seed data
  let campgrounds = [
    {
      id: 1,
      type: "campground",
      attributes: {
          name: "Beaver Bay Campground",
          city: "Cougar",
          state: "WA"
      }
    }, {
      id: 2,
      type: "campground",
      attributes: {
        name: "Cape Lookout State Park",
        city: "Tillamook",
        state: "OR"
      }
    }, {
      id: 3,
      type: "campground",
      attributes: {
        name: "Cove Palisades State Park",
        city: "Culver",
        state: "OR"
      }
    }, {
      id: 4,
      type: "campground",
      attributes: {
        name: "Crescent Lake Campground",
        city: "Crescent",
        state: "OR"
      }
    }, {
      id: 5,
      type: "campground",
      attributes: {
        name: "Deschutes River State Recreation Area",
        city: "Wasco",
        state: "OR"
      }
    }, {
      id: 6,
      type: "campground",
      attributes: {
          name: "Detroit Lake State Recreation Area",
          city: "Detroit",
          state: "OR"
      }
    }, {
      id: 7,
      type: "campground",
      attributes: {
          name: "Devil's Lake State Recreation Area",
          city: "Lincoln City",
          state: "OR"
      }
    }, {
      id: 8,
      type: "campground",
      attributes: {
        name: "Fort Stevens State Park",
        city: "Hammond",
        state: "OR"
      }
    }, {
      id: 9,
      type: "campground",
      attributes: {
        name: "South Beach State Park",
        city: "Newport",
        state: "OR"
      }
    }, {
      id: 10,
      type: "campground",
      attributes: {
        name: "Timothy Lake Campground",
        city: "Clackamas County",
        state: "OR"
      }
    }
  ]

  // GET list of campgrounds
  this.get('/campgrounds', (db, request) => {
    if (request.queryParams.id !== undefined) {
      let filteredResults = campgrounds.filter((item) => {
        return item.id;
      });
      return { data: filteredResults };
    } else {
      return { data: campgrounds };
    }
  });

  // GET specific campground
  this.get('/campgrounds/:id', function (db, request) {
    return { data: campgrounds.find((item) => parseInt(request.params.id) === item.id) };
  });
}
