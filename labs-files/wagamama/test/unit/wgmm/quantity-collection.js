describe('with quantity collections', function () {
  var collection,
      item71 = { id: 'item-71', name: 'chicken katsu curry', price: 14.45, category: 'rice dishes' },
      item3 = { id: 'item-3', name: 'orange juice', price: 4.75, category: 'fresh juices' },
      item100 = { id: 'item-100', name: 'gyoza', price: 5.95, category: 'side dishes' },
      items = [item71, item3];

  it('you can initialiazed them', function () {
    collection = Object.create(wgmm.quantityCollection).init(items);
    expect(collection.get('item-71')).toBe(item71);
  });

  describe('an item', function () {
    beforeEach(function () {
      collection = Object.create(wgmm.quantityCollection).init(items);
    });

    it('can be retrieved using its id', function () {
      expect(collection.get('item-71')).toBe(item71);
      expect(collection.get('item-3')).toBe(item3);
    });

    it('can be add with an object that has an id', function () {
      collection.put(item100);
      expect(collection.get('item-100')).toBe(item100);
    });

    it('can be removed using its id', function () {
      collection.remove('item-71');
      expect(collection.get('item-71')).toBeUndefined();
    });

    it('can be counted', function () {
      expect(collection.howMany('item-71')).toBe(1);
      expect(collection.howMany('item-3')).toBe(1);
      expect(collection.howMany('item-100')).toBe(0);
    });

    it('can be added more than once, its quantity is increased', function () {
      collection.put(item100);
      collection.put(item100);
      collection.put(item100);
      expect(collection.howMany('item-100')).toBe(3);
    });

    it('can be removed more than once, its quantity is decreased', function () {
      collection.put(item71);
      expect(collection.howMany('item-71')).toBe(2);
      collection.remove('item-71');
      expect(collection.howMany('item-71')).toBe(1);
      collection.remove('item-71');
      expect(collection.howMany('item-71')).toBe(0);
      expect(collection.get('item-71')).toBeUndefined();
    });
  });
});
