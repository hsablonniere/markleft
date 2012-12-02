describe('View switcher', function () {
  it('should switch to view when view value is accepted', function () {
    wgmm.view = 'order';
    wgmm.view = 'table';
    expect(wgmm.view).toBe('table');
  });

  it('should not switch to view when view value is not accepted', function () {
    wgmm.view = 'order';
    wgmm.view = 'azerty';
    expect(wgmm.view).toBe('order');
  });
});
