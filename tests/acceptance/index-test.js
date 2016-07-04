import { test } from 'qunit';
import moduleForAcceptance from 'blr-tdd-workshop/tests/helpers/module-for-acceptance';
import Ember from 'ember';

moduleForAcceptance('Acceptance | index',{

  beforeEach(){
    server.createList('album',12);
  }
});


test('Visiting index page should display albums', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(Ember.$('.album').length, 12);
  });
});

test('Search without term', function(assert) {
  visit('/');
  fillIn('input.search__input', ' ');
  andThen(function() {
    assert.equal(Ember.$('.album').length, 12);
  });
});

test('Searching by album name', function(assert) {
  visit('/');
  fillIn('input.search__input', 'Coldplay');
  andThen(function() {
    assert.equal(Ember.$('.album').length, 1);
  });
});

test('Searching by artist name', function(assert) {
  visit('/');
  fillIn('input.search__input', 'American Idiot');
  andThen(function() {
    assert.equal(Ember.$('.album').length, 1);
  });
});
