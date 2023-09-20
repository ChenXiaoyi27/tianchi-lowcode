'use strict';

const { Controller } = require('egg');

class AdminController extends Controller {
  async assets() {
    const { ctx } = this;
    const res = await ctx.curl('https://chenxiaoyi27.oss-cn-guangzhou.aliyuncs.com/json/assets.json', {
      dataType: 'json',
    });
    ctx.body = res;
  }
}

module.exports = AdminController;
