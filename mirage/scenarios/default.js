export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  const localDb = localStorage.getItem('localDb');

  const seedData = [
    {name: "Beaver Bay Campground"},
    {name: "Cape Lookout State Park"},
    {name: "Cove Palisades State Park"},
    {name: "Fort Stevens State Park"}
  ];

  const initSeedData = (array) => {
    array.forEach(cg => {
      server.create('campground', cg);
    })
  };

  server.createList('campground', 0);

  if (localDb) {
    const parsedDb = JSON.parse(localDb);
    initSeedData(parsedDb);
  } else {
    localStorage.setItem('localDb', JSON.stringify(seedData));
    initSeedData(seedData);
  }
}
