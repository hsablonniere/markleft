var wgmm = wgmm || {};

(function () {
  // Order definition
  var order = Object.create(wgmm.quantityCollection),
      orderAddItem,
      orderRemoveItem;

  // When an item is added to an order we add it to the DOM
  // If it there was already one, we increment the quantity
  orderAddItem = function (id, item, quantity) {
    if ($('.order-items [data-item-id="' + id + '"]').length !== 1) {
      var $item,
          $itemName,
          $itemPrice,
          $itemInc,
          $itemQuantity,
          $itemDec;

      $item = $('<div class="menu-item"></div>').attr('data-item-id', id);
      $itemName = $('<div class="menu-item-name"></div>').html(item.name);
      $itemPrice = $('<div class="menu-item-price"></div>').html(wgmm.money.format(item.price));
      $itemInc = $('<button class="menu-item-inc">+</button>');
      $itemDec = $('<button class="menu-item-dec">-</button>');

      $item
          .append($itemName)
          .append($itemPrice)
          .append($itemInc)
          .append($itemQuantity)
          .append($itemDec)
          .appendTo('.order-items');
    }

    if (quantity > 1) {
      $('.order-items [data-item-id="' + id + '"] .menu-item-price').html(wgmm.money.format(item.price) + ' × ' + quantity + ' = ' + wgmm.money.format(item.price * quantity));
    }
  };
  order.onPut(orderAddItem);

  // When an item is removed from an order we remove it from the DOM
  // If it there was more than one, we decrement the quantity
  orderRemoveItem = function (id, item, quantity) {
    if (quantity === 0) {
      $('.order-items [data-item-id="' + id + '"]').remove();
    } else if (quantity === 1) {
      $('.order-items [data-item-id="' + id + '"] .menu-item-price').html(wgmm.money.format(item.price));
    } else {
      $('.order-items [data-item-id="' + id + '"] .menu-item-price').html(wgmm.money.format(item.price) + ' × ' + quantity + ' = ' + wgmm.money.format(item.price * quantity));
    }
  };
  order.onRemove(orderRemoveItem);

  // Tables definition
  var $tables = $(document.createDocumentFragment());
  wgmm.tables = Object.create(wgmm.quantityCollection).init(wgmm.data.tables);

  // For each table we add it to the DOM
  wgmm.tables.doEach(function (id, item) {
    var $table = $('<li class="table"></li>')
        .attr('data-table-id', id)
        .html(item.name)
        .appendTo($tables);

    item.orderedItems = Object.create(order).init();
  });
  $('.tables').append($tables);

  // When a table is selected, we set the DOM correctly
  wgmm.tables.select = function (id) {
    if (this.get(id)) {
      this._selected = this.get(id);
      $('.order-items').html('');
      this._selected.orderedItems.doEach(orderAddItem);
      $('.order-panel').attr('data-table-id', id);
      $('.order-table-number').html(this._selected.name);
    }
  };

  // Standard getter
  wgmm.tables.getSelected = function () {
    return this._selected;
  };

  // When a table is clicked we select it
  $('.tables').on('click', '.table', function () {
    var id = $(this).attr('data-table-id');
    wgmm.tables.select(id);
  });

  // When an item is incremented we add it to the order
  $('.order-items').on('click', '.menu-item-inc', function () {
    var id = $(this).parent().attr('data-item-id');
    var item = wgmm.tables.getSelected().orderedItems.get(id);
    wgmm.tables.getSelected().orderedItems.put(item);
  });

  // When an item is decremented we remove it from the order
  $('.order-items').on('click', '.menu-item-dec', function () {
    var id = $(this).parent().attr('data-item-id');
    wgmm.tables.getSelected().orderedItems.remove(id);
  });
})();
