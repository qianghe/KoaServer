const areasHelper = require('../helper/areasHelper');
const mongoose = require('mongoose');
const Areas = mongoose.model('Areas');

/**
 * 数据库接口测试
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.areas = async (ctx, next) => {
  var data = await areasHelper.findAllAreas();
  console.log('areas data', data);
  ctx.body = {
    success: true,
    data
  }
};

exports.addArea = async (ctx, next) => {
  const areas = await areasHelper.findAllAreas();
  const nextId = areas.length ? Math.max(...areas.map(area => area.id)) : 0;
  const { name = '', parentId = 0, level = 1 } = ctx.request.body;
  const area = new Areas({
    id: nextId + 1,
    name,
    parentId,
    level,
  });

  const newArea = await areasHelper.addArea(area);

  if(newArea) {
    ctx.body = {
      success: true,
      data: newArea,
    };
  }
};

exports.deleteArea = async (ctx, next) => {
  const { id } = ctx.request.body;
  console.log(phoneNumber)
  var data  = await areasHelper.deleteArea({ id })
  ctx.body = {
    success: true,
    data
  }
}
