'use strict'

const Router = require('koa-router');
const Area = require('../app/controller/areas.js');
const Item = require('../app/controller/items.js');

module.exports = function() {
  const router = new Router({
    prefix: '/api',
  });

  //获取基础数据——地域信息
  router.get('/base/area', Area.areas);
  router.post('/base/addArea', Area.addArea);
  router.post('/base/delArea', Area.deleteArea);

  //获取基础数据——商品
  router.get('/base/items', Item.items);
  router.post('/base/addItem', Item.addItem);
  return router;
}
