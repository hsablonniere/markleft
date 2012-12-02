describe('Money utils', function () {
  // Here we introduce custom matchers needed for our tests
  beforeEach(function () {
    this.addMatchers({
      toStartWith: function (expected) {
        if (typeof this.actual === 'string') {
          return this.actual.indexOf(expected) === 0;
        } else {
          return false;
        }
      },
      toEndWith: function (expected) {
        if (typeof this.actual === 'string') {
          return this.actual.slice(-expected.length) === expected;
        } else {
          return false;
        }
      }
    });
  });

  it('should format number with 2 decimal digits', function () {
    expect(wgmm.money.format(12)).toStartWith('12.00 ');
    expect(wgmm.money.format(12.3)).toStartWith('12.30 ');
    expect(wgmm.money.format(12.35)).toStartWith('12.35 ');
    expect(wgmm.money.format(12.444)).toStartWith('12.44 ');
    expect(wgmm.money.format(12.445)).toStartWith('12.45 ');
  });

  it('should always have the currency at the end', function () {
    expect(wgmm.money.format(12)).toEndWith(' ' + wgmm.money.currency);
    expect(wgmm.money.format(12.3)).toEndWith(' ' + wgmm.money.currency);

    wgmm.money.currency = '$';
    expect(wgmm.money.format(12.35)).toEndWith(' ' + wgmm.money.currency);
    expect(wgmm.money.format(12.444)).toEndWith(' ' + wgmm.money.currency);

    wgmm.money.currency = 'U.S. Dollars';
    expect(wgmm.money.format(12.445)).toEndWith(' ' + wgmm.money.currency);
  });
});
