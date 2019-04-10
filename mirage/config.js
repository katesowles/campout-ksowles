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
      }
    },
    {
      id: 2,
      type: "campground",
      attributes: {
        name: "Cape Lookout State Park",
      }
    },
    {
      id: 3,
      type: "campground",
      attributes: {
        name: "Cove Palisades State Park",
      }
    },
    {
      id: 4,
      type: "campground",
      attributes: {
        name: "Fort Stevens State Park",
      }
    },
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
