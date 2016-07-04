import steps from './steps';

// step definitions that are shared between features should be moved to the
// tests/acceptance/steps/steps.js file

export default function(assert) {
  return steps(assert)
   	.given('I have $int albums', (number,next) => {
   	  server.createList('album',number);
   	  assert.equal(server.db.albums.length,number);	 	  
      next();
    })
    .when('I visit fancy album page', (next) => {      	
      visit("/");
      assert.ok(true, this.step);
      andThen(()=>next());
    })
    .then('I should see $int albums', (number,next) => {
      assert.equal(find('.album').length, number);
      next();
    });
}
