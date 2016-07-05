import steps from './steps';

// step definitions that are shared between features should be moved to the
// tests/acceptance/steps/steps.js file

export default function(assert) {
  return steps(assert)
    .given('I enter "$search"', (search,next) => {	
   	 fillIn('input.search__input',search);
   	 assert.ok(true, this.step);
   	 andThen(()=>next());
    });
}
