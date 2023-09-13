const Service = require('egg').Service;

class SiteService extends Service {
  constructor(app) {
    super(app);
    const { ctx } = this;
    this.site = ctx.model.Site;
  }
  async list(group_id) {
    return this.site.findAll({
      where: {
        group_id,
      },
    });
  }
  async add(site) {
    return this.site.create(site);
  }
  async info(site_id) {
    return this.site.findOne({
      where: { site_id },
    });
  }
}

module.exports = SiteService;
