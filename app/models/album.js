import DS from 'ember-data';

export default DS.Model.extend({
  name:  DS.attr('string'),

  artist: DS.attr('string'),

  albumArtUrl: DS.attr('string')
});
