const uuid = require('uuid');
const Controller = require('egg').Controller;

class PageController extends Controller {
  // 新建空页面
  async add() {
    const { ctx } = this;
    const { page_name, site_id } = ctx.request.body;
    const now = new Date();
    const page_id = uuid.v4();
    const user_id = ctx.session.user_id;
    const page = {
      page_id, // 页面uuid
      page_name, // 页面名称
      lock: '', // 页面编辑锁：当有用户进入这个页面的修改功能时，值为true，其他用户只能查看，不能编辑
      create_at: now, // 页面创建时间
      update_at: now, // 页面修改时间
      creator_id: user_id, // 创建人user_id
      updater_id: user_id, // 修改人user_id
      site_id, // 网站id
    };
    const result = await ctx.service.page.add(page);
    ctx.logger.info('page.add result', result);
    ctx.body = {
      success: true,
      message: null,
      data: { page },
    };
  }
  // 查询页面列表
  async list() {
    const { ctx } = this;
    const { site_id } = ctx.request.body;
    const list = await ctx.service.page.list({ site_id });
    for (const li of list) {
      li.dataValues.version = await ctx.service.version.list(li.page_id);
    }
    ctx.body = {
      success: true,
      message: null,
      data: list,
    };
  }
  async getLock() {
    const { ctx } = this;
    const { page_id } = ctx.request.query;
    const result = await ctx.service.page.getLock(page_id);
    ctx.body = {
      succrss: true,
      message: null,
      data: result,
    };
  }
  async lock() {
    const { ctx } = this;
    const { page_id, lock } = ctx.request.query;
    const user_id = ctx.session.user_id;
    const result = await ctx.service.page.lock(page_id, lock === 'Y', user_id);
    ctx.logger.info('page.lock result', result);
    ctx.body = {
      success: true,
      message: null,
      data: null,
    };
  }
  // 修改
  async modify() {
    const { ctx } = this;
    const { page_id, newData } = ctx.request.body;
    const result = await ctx.service.page.modify(page_id, newData);
    ctx.logger.info('page.modify result', result);
    ctx.body = {
      success: true,
      message: null,
      data: null,
    };
  }
  // 删除单个页面
  async deletePage() {
    const { ctx } = this;
    const { page_id } = ctx.request.query;
    const result = await ctx.service.page.deletePage(page_id);
    ctx.logger.info('page.deletePage result', result);
    ctx.body = {
      success: true,
      message: null,
      data: page_id,
    };
  }
}

module.exports = PageController;
