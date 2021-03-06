'use strict';

describe('Directive: scrollTopOn', function () {

  // load the directive's module
  beforeEach(module('fsaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scroll-top-on></scroll-top-on>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scrollTopOn directive');
  }));
});