const uuid = require('uuid');
const Controller = require('egg').Controller;

class SiteController extends Controller {
  async list() {
    const { ctx } = this;
    const user = await ctx.service.user.find(ctx.session.user_id);
    console.log('ctx.session', ctx.session);
    const list = await ctx.service.site.list(user.group_id);
    ctx.body = {
      success: true,
      message: null,
      data: list,
    };
  }
  async add() {
    const { ctx } = this;
    const { site_name } = ctx.request.body;
    const user_id = ctx.session.user_id;
    const user = await ctx.service.user.find(ctx.session.user_id);
    const now = new Date();
    const site = {
      site_id: uuid.v4(), // 网站uuid，全局唯一
      site_name, // 网站名称
      group_id: user.group_id, // 所属小组
      creator_id: user_id, // 创建人id
      created_at: now, // 创建时间
      updated_at: now, // 更新时间
    };
    await ctx.service.site.add(site);
    ctx.body = {
      success: true,
      message: null,
      data: site,
    };
  }
  async info() {
    const { ctx } = this;
    const { site_id } = ctx.request.query;
    const info = await ctx.service.site.info(site_id);
    ctx.body = {
      success: true,
      message: null,
      data: info,
    };
  }
}

module.exports = SiteController;
