'use strict'

const Router = require('koa-router');
const Area = require('../app/controller/areas.js');

module.exports = function() {
  const router = new Router({
    prefix: '/api',
  });

  //获取基础数据——地域信息
  router.get('/base/area', Area.areas);
  router.get('/base/area', Area.addArea);
  router.get('/base/area', Area.deleteArea);

  return router;
}
