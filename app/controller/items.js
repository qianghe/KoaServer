const itemsHelper = require('../helper/itemsHelper');
const mongoose = require('mongoose');
const Items = mongoose.model('Items');

/**
 * 数据库接口测试
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.items = async (ctx, next) => {
  const data = await itemsHelper.findAllItems();

  ctx.body = {
    success: true,
    data
  }
};

exports.addItem = async (ctx, next) => {
  const items = await itemsHelper.findAllItems();
  const nextId = items.length ? Math.max(...items.map(item => item.id)) : 1;
  const { title, price, stocks, img } = ctx.request.body;
  const item = new Items({
    id: nextId,
    title,
    price,
    img,
    stocks,
  });

  const newItem = await itemsHelper.addItem(item);

  if (newItem) {
    ctx.body = {
      success: true,
      data: newItem,
    };
  }
}
