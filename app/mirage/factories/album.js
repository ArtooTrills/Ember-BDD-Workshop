import {Factory,faker} from 'ember-cli-mirage';

export default Factory.extend({
  id(i){
    return i;
  },
  name(i){
    return faker.list.cycle('X&Y','Random Access Memories','A Town Called Paradise','All the Lost Souls','American Idiot','The Best of Sugar Ray','Babel','Wilder Mind','Makes Me Wonder','All The Lost Souls','We the people','Gorillaz')(i);
  },
  artist(i){
    return faker.list.cycle('Coldplay','Daft Punk','Tiesto','James Blunt','Green Day','Sugar Ray','Mumford & Sons','Mumford & Sons','Maroon 5','James Blunt','Flipsyde','Gorillaz')(i);
  },
  albumArtUrl(){
    return 'http://a1.mzstatic.com/us/r30/Music/v4/a3/3d/26/a33d26f8-30cc-474f-8f7a-4b6a73643bd7/cover170x170.jpeg';
  }

});

