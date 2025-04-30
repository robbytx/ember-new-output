import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  setupController(controller) {
    const example = this.store.modelFor('example');
    controller.set('example', example);
    controller.set('inverse', example.inverseFor('parent', this.store));
    // helpers:
    controller.set('typeof', (value) => typeof value);
    controller.set('keys', (value) => Object.keys(value));
    controller.set('equal', (value1, value2) => value1 === value2);
  }
}
