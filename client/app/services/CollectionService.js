/**
 * Created by wajahat on 28/01/2017.
 */
function CollectionService() {

  "ngInject";

  let collections = {
    count: 0,
    collection: {},
    breakLoop:false
    };

  return {

    keyExists(key) {

      return void 0 != collections.collection[key];
    },

    addCollection(key, item) {
      collections.collection[key] = item;
      return ++collections.count;
    },

    removeCollection(name) {
      if (this.keyExists(name)) {
        delete collections.collection[name];
        return --collections.count;
      }
    },

    getCollection(id) {
      return collections.collection[id];
    },

    getCollections() {
      return collections.collection;
    },

    forEach(callback) {
      let photo = 0;
      for (key in collections.collection) {
        if (collections.collection.hasOwnProperty(key)) {
          callback(key, collections.collection[key], photo);
        }
        if (collections.breakLoop) {
          collections.breakLoop = false;
          break;
        }
        photo++;
      }
    },

     breakForEach() {
        collections.breakLoop = true;
     },

    size() {
      return collections.count;
    },

    toArray() {
      var arr = [];
      this.forEach(function(dataAndEvents, chunk) {
        arr.push(chunk);
      });
      return arr;
    }
  }
}

export default CollectionService;
