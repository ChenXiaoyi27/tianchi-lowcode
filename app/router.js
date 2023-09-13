'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  /** test start */
  router.get('/', controller.admin.index);
  router.post('/api/schemas', controller.admin.saveSchema);
  /** test end */
  /** lowcode start */
  router.get('/api/user/info', controller.user.find);
  router.post('/api/user/register', controller.user.add);
  router.post('/api/user/login', controller.user.login);
  router.get('/api/user/logout', controller.user.logout);
  router.post('/api/page/add', controller.page.add);
  router.post('/api/page/list', controller.page.list);
  router.get('/api/page/lock/get', controller.page.getLock);
  router.get('/api/page/lock', controller.page.lock);
  // router.post('/api/page/modify', controller.page.modify); // 先不实现
  router.get('/api/page/delete', controller.page.deletePage);
  router.post('/api/version/add', controller.version.add);
  router.get('/api/version/schema', controller.version.getSchema);
  router.get('/api/version/list', controller.version.list);
  router.post('/api/site/add', controller.site.add);
  router.post('/api/site/list', controller.site.list);
  router.get('/api/site/info',controller.site.info);
  router.get('/api/group/list', controller.group.list);
  /** lowcode end */
};
