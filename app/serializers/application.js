import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {

  serializeBelongsTo(snapshot, json, relationship) {
    if (!relationship.key) {
      throw new Error('relationship.key is missing');
    }
  }
}
