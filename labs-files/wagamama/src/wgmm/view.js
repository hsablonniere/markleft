var wgmm = wgmm || {};

Object.defineProperty(wgmm, 'view', {
  // You can only set the view property with valid values
  set: function (view) {
    if (['table', 'order', 'payment'].indexOf(view) !== -1) {
      this._view = view;
      $('body').attr('data-view', view);
    }
  },

  // Standard getter
  get: function () {
    return this._view;
  }
});

// If someone clicks on the title we switch to table view
$('.main-header-title').on('click', function () {
  wgmm.view = 'table';
});

// If someone clicks on a table with switch to order view
$('.tables').on('click', '.table', function () {
  var id = $(this).attr('data-table-id');
  wgmm.view = 'order';
});
