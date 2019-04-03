// NOTE: This is unused currently, figure out how to reinforce data models!

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
});
