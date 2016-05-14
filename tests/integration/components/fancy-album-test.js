import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Album from 'blr-tdd-workshop/models/album';

moduleForComponent('fancy-album', 'Integration | Component | fancy album', {
  integration: true
});

test('siva it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  const album = new Album({
    name: 'We are the champions',
    artist: 'Queen',
    albumArtUrl: ''
  });

  this.set('albumToPass', album);
  this.render(hbs`{{fancy-album album=albumToPass}}`);

  assert.equal(this.$('.album__desc__title').text().trim(), 'We are the champions', 'It shows the title');
  assert.equal(this.$('.album__desc__artist').text().trim(), 'by Queen', 'it shows the artist');


});
