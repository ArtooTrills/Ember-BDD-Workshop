import { test } from 'qunit';
import moduleForAcceptance from 'blr-tdd-workshop/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';
import Albums from '../fixtures/albums';
import Ember from 'ember';

moduleForAcceptance('Acceptance | index');

test('Visiting index page should display albums', function(assert) {
  visit('/');

  new Pretender(function() {
    this.get('/albums', function() {
      return [200, {'content-type': 'application/json'}, JSON.stringify(Albums)];
    });
  });


  andThen(function() {
    assert.equal(Ember.$('.album').length, 12);
  });
});
