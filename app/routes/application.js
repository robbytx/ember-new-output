import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { NotFoundError } from '@ember-data/adapter/error';

export default class ApplicationRoute extends Route {
  @service store;

  async model() {
    try {
      await this.store.createRecord('example').save();
    } catch (error) {
      if (!(error instanceof NotFoundError)) {
        throw error;
      }
    }
  }
}
