var wgmm = wgmm || {};

wgmm.money = {
  currency: '€',

  // Format a price to a human readable version
  format: function (price) {
    return price.toFixed(2) + ' ' + this.currency;
  }
};
