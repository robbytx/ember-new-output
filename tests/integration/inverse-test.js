import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-app/tests/helpers';

module('Integration | inverse', function (hooks) {
  setupRenderingTest(hooks);

  test('Model.inverseFor(...).type is a class', async function (assert) {
    const store = this.owner.lookup('service:store');

    const Example = store.modelFor('example');
    assert.ok(Example, 'Example');
    assert.strictEqual(Example.modelName, 'example', 'Example.modelName');

    const parentInverse = Example.inverseFor('parent', store);
    assert.ok(parentInverse, 'Example.inverseFor("parent", store)');
    assert.strictEqual(parentInverse.type, Example, 'Example.inverseFor("parent", store).type === Example');
    assert.strictEqual(parentInverse.name, 'children', 'Example.inverseFor("parent", store).name');
    assert.strictEqual(parentInverse.kind, 'hasMany', 'Example.inverseFor("parent", store).kind');

    const childrenInverse = Example.inverseFor('children', store);
    assert.ok(childrenInverse, 'Example.inverseFor("children", store)');
    assert.strictEqual(childrenInverse.type, Example, 'Example.inverseFor("children", store).type === Example');
    assert.strictEqual(childrenInverse.name, 'parent', 'Example.inverseFor("children", store).name');
    assert.strictEqual(childrenInverse.kind, 'belongsTo', 'Example.inverseFor("children", store).kind');
  });
});
