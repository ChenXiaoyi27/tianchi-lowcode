const Service = require('egg').Service;

class GroupService extends Service {
  constructor(app) {
    super(app);
    const { ctx } = this;
    this.site = ctx.model.Group;
  }
  async list() {
    return this.site.findAll();
  }
}

module.exports = GroupService;
