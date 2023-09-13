const uuid = require('uuid');
const Controller = require('egg').Controller;

class VersionController extends Controller {
  async add() {
    const { ctx } = this;
    const { old_version_id, page_id, version_schema } = ctx.request.body;
    const user_id = ctx.session.user_id;
    const now = new Date();
    const version = {
      version_id: uuid.v4(), // 版本uuid，全局唯一
      old_version_id, // 版本uuid，全局唯一：基于哪个版本创建的版本；新增时，值为空
      page_id, // 关联的页面page_id
      version_creator_id: user_id, // 版本创建人user_id
      version_schema, // 通过设计器保存的schema.json的json字符串。需要格式大一点的，blob等
      version_note: '', // 版本说明，可记录迭代信息等
      version_create_at: now, // 版本创建时间
    };
    await ctx.service.version.add(version);
    ctx.body = {
      success: true,
      message: null,
      data: version,
    };
  }
  // 根据页面id获取所有版本列表
  async list() {
    const { ctx } = this;
    const { page_id } = ctx.request.query;
    const result = await ctx.service.version.list(page_id);
    ctx.body = {
      success: true,
      message: null,
      data: result,
    };
  }
  async getSchema() {
    const { ctx } = this;
    const { page_id, version_id } = ctx.request.query;
    const result = await ctx.service.version.getSchema(page_id, version_id);
    // schema={schema,packages}
    const schema = result ? JSON.parse(result.toString()) : null;
    ctx.body = {
      success: true,
      message: null,
      data: schema,
    };
  }
}

module.exports = VersionController;
