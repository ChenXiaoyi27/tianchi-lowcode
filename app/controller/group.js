const { Controller } = require('egg');

class GroupController extends Controller {
  async list() {
    const { ctx } = this;
    const list = await ctx.service.group.list();
    ctx.body = {
      success: true,
      message: null,
      data: list,
    };
  }
}

module.exports = GroupController;
