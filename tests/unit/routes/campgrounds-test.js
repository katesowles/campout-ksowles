import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage'

module('Unit | Route | campground-list', function(hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test('should show campgrounds as home page', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/campgrounds', 'should redirect automatically')
  });
});
