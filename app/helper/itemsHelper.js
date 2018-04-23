'use strict'

const mongoose =  require('mongoose');
const Items = mongoose.model('Items');

/**
 * 查找所用项目
 * @return {[type]} [description]
 */
exports.findAllItems = async function() {
  const res = await Items.find({}).exec();

  return res;
}

/**
  * 添加一个项目
  * @return {[type]} [description]
  */
exports.addItem = async function(item) {
  console.log('****db helper addItem', item);
  item = await item.save();
  return item;
}
