var wgmm = wgmm || {};
(function () {
  var categories = {};

  // The menu is a collection of objects
  wgmm.menu = Object.create(wgmm.quantityCollection).init(wgmm.data.menuItems);

  // For each item we build the appropriate DOM elements item/category
  wgmm.menu.doEach(function (id, item) {
    var $item,
        $itemName,
        $itemPrice,
        $itemAdd,
        $category,
        $categoryName,
        $categoryItems;

    if (categories[item.category] === undefined) {
      var $category = $('<div class="menu-category"></div>'),
          $categoryName = $('<h3 class="menu-category-name"></h3>').html(item.category),
          $categoryItems = $('<ul class="menu-category-items"></ul>');

      $category
          .append($categoryName)
          .append($categoryItems);

      categories[item.category] = {
        $root: $category,
        $items: $categoryItems
      };
    } else {
      $categoryItems = categories[item.category].$items;
    }

    $item = $('<div class="menu-item"></div>').attr('data-item-id', id);
    $itemName = $('<div class="menu-item-name"></div>').html(item.name);
    $itemPrice = $('<div class="menu-item-price"></div>').html(wgmm.money.format(item.price));
    $itemAdd = $('<button class="menu-item-add">Add</button>');

    $item
        .append($itemName)
        .append($itemPrice)
        .append($itemAdd)
        .appendTo($categoryItems);
  });
  for (var categoryName in categories) {
    $('.menu-categories').append(categories[categoryName].$root);
  }

  // If someone clicks on add, we add the item to the orderItems of the selected table
  $('.menu-categories').on('click', '.menu-item-add', function () {
    var id = $(this).parent().attr('data-item-id'),
        item = wgmm.menu.get(id);

    wgmm.tables.getSelected().orderedItems.put(item);
  });
})();
