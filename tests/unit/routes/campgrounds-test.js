import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';

module('Unit | Route | campground-list', function(hooks) {
  setupTest(hooks);

  test('should show campgrounds as home page', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/campgrounds', 'should redirect automatically')
  });
});
