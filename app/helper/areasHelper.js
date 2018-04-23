'use strict'

const mongoose =  require('mongoose');
const Areas = mongoose.model('Areas');


/**
 * 查找所用地区
 * @return {[type]} [description]
 */
exports.findAllAreas = async function() {
  var query = Areas.find({});
  var res = await query.exec();

  // await query.exec(function(err, areas){
  //   if (err) {
  //     console.log('err')
  //     res = []
  //   } else {
  //     console.log('find all success', areas);
  //     res = areas;
  //   }
  // });
  console.log('findAllAreas res', res);
  return res;
}

/**
 * 增加地区
 * @param  {[Areas]} area [mongoose.model('Areas')]
 * @return {[type]}      [description]
 */
exports.addArea = async (area) => {
  console.log('****db helper addArea', area);
	area = await area.save()
	return area;
}

/**
 * 删除地区
 * @param  {[type]} options.phoneNumber [description]
 * @return {[type]}                     [description]
 */
exports.deleteArea = async ({ id }) => {
	var flag = false
	console.log('flag==========>' + flag)

  await Area.remove({ id }, function(err) {
		if(err) {
			flag = false
			// return false
		}else{
			flag = true
		}
	});
	console.log('flag=====await=====>'+flag)
	return flag
}
