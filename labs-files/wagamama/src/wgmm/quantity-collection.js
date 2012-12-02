var wgmm = wgmm || {};

/**
 * A collection of objects with a quantity
 When you add a item twice in the collection its quantity is two and so on...
 * @type {Object}
 */
wgmm.quantityCollection = {
  // Initialize the collection using an array of objects
  init: function (items) {
    this._items = {};
    this._quantities = {};
    if (items != null && items.length != null) {
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        this.put(item);
      }
    }
    return this;
  },

  // Retrieve an object using its id
  get: function (id) {
    return this._items[id];
  },

  // Return how many objects with a specific id are in the collection
  howMany: function (id) {
    return this._quantities[id] || 0;
  },

  // Put an object into the collection
  put: function (item) {
    this._quantities[item.id] = this.howMany(item.id) + 1;
    this._items[item.id] = item;
    if (this._onPut) {
      this._onPut(item.id, this.get(item.id), this.howMany(item.id));
    }
  },

  // Remove an object from the collection using its id
  remove: function (id) {
    if (this.howMany(id) === 1) {
      delete this._items[id];
      delete this._quantities[id];
    } else {
      this._quantities[id] -= 1;
    }
    if (this._onRemove) {
      this._onRemove(id, this.get(id), this.howMany(id));
    }
  },

  // Remove all the objects from the collection
  removeAll: function () {
    for (var id in this._items) {
      if (this._items.hasOwnProperty(id)) {
        delete this._items[id];
      }
    }
  },

  // Set a callback to be called when a item is put
  // callback arguments : id, item, quantity
  onPut: function (callback) {
    this._onPut = callback;
  },

  // Set a callback to be called when a item is removed
  // callback arguments : id, item, quantity
  onRemove: function (callback) {
    this._onRemove = callback;
  },

  // Call a function on an item
  // callback arguments : id, item, quantity
  do: function (id, callback) {
    callback.call(this, id, this.get(id), this.howMany(id));
  },

  // Call a function on each item
  // callback arguments : id, item, quantity
  doEach: function (callback) {
    for (var id in this._items) {
      callback.call(this, id, this.get(id), this.howMany(id));
    }
  }
};
