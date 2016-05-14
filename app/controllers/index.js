import Ember from 'ember';

const get = {Ember};

export default Ember.Controller.extend({

  search: '',

  filteredAlbums: Ember.computed('search', function() {
    const searchTerm = this.get('search').trim();

    const albums = this.get('model').filter(album => {
      if(searchTerm == '') {
        return album;
      }
      if(
        album.artist.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1 ||
        album.name.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1
                                                 ) {
        return album;
      }
    });
    console.log(albums);
    return albums;
  })

});
