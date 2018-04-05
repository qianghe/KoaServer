require('babel-core/register');

const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
//连接数据库
const db = 'mongodb://localhost/test';
mongoose.connect(db);

/**
 * 获取数据库表对应的js对象所在的路径
 * @type {[type]}
 */
const models_path = path.join(__dirname, '/app/models')


/**
 * 已递归的形式，读取models文件夹下的js模型文件，并require
 * @param  {[type]} modelPath [description]
 * @return {[type]}           [description]
 */
var walk = function(modelPath) {
  fs
    .readdirSync(modelPath)
    .forEach(function(filename) {
      const filePath = path.join(modelPath, '/' + filename);
      var stat = fs.statSync(filePath)

      if (stat.isFile()) {
        if (/(.*)\.(js|coffee)/.test(filePath)) {
          require(filePath);
        }
      } else if (stat.isDirectory()) {
        walk(filePath);
      }
    })
};

walk(models_path);

//中间件
const Koa = require('koa');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
app
  .use(logger())
  .use(bodyParser())

//提供router路由信息
const router = require('./config/router.js');
app
  .use(router.routes())
  .use(router.allowedMethods())

// app.use(async (ctx) => {
//   ctx.body = 'hello world';
// });

app.listen(3000);
console.log('app started at port 3000...');
