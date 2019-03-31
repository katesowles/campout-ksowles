import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return [
      'Beaver Bay Campground',
      'Cape Lookout State Park',
      'Cove Palisades State Park',
      'Crescent Lake Campground',
      'Deschutes River State Recreation Area',
      'Detroit Lake State Recreation Area',
      'Devil\'s Lake State Recreation Area',
      'Fort Stevens State Park',
      'South Beach State Park',
      'Timothy Lake Campground'
    ]
  }
});
