import { test } from 'qunit';
import moduleForAcceptance from 'blr-tdd-workshop/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('Visiting index page should display albums', function(assert) {
  visit('/index');

  andThen(function() {
    assert.equal(Ember.$('.album').length, 10);
  });
});
