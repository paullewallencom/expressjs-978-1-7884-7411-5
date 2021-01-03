(function () {
  'use strict';

  angular
    .module('jobs')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {
  /*
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Jobs',
      state: 'jobs',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'jobs', {
      title: 'List Jobs',
      state: 'jobs.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'jobs', {
      title: 'Create Job',
      state: 'jobs.create',
      roles: ['user']
    });
    */

    menuService.addMenuItem('topbar', {
      title: 'Latest Jobs',
      state: 'jobs.list',
      roles: ['*']
    });

    menuService.addMenuItem('topbar', {
      title: 'Create Job',
      state: 'jobs.create',
      roles: ['user']
    });
  }
}());
