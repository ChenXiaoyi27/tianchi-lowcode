const Service = require('egg').Service;

class VersionService extends Service {
  constructor(app) {
    super(app);
    const { ctx } = this;
    this.version = ctx.model.Version;
  }
  // 新建版本
  async add(version) {
    return this.version.create(version);
  }
  async list(page_id) {
    return this.version.findAll({
      where: {
        page_id,
      },
      order: [
        ['created_at', 'DESC'],
      ],
    });
  }
  async getSchema(page_id, version_id) {
    let target_version = null;
    // 若version_id为空，则取页面最新创建的版本
    if (!version_id) {
      const versions = await this.version.findAll({
        where: { page_id },
        order: [
          ['created_at', 'DESC'],
        ],
      });
      if (versions.length) {
        target_version = versions[0];
      }
    } else {
      target_version = await this.version.findOne({
        where: {
          version_id,
        },
      });
    }
    return target_version?.version_schema || null;
  }
}

module.exports = VersionService;
