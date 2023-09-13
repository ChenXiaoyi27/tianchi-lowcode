const Service = require('egg').Service;

class UserService extends Service {
  constructor(app) {
    super(app);
    const { ctx } = this;
    this.user = ctx.model.User;
  }
  async find(user_id) {
    return await this.user.findOne({
      where: { user_id },
    });
  }
  async findByName(user_name) {
    return await this.user.findOne({
      where: { user_name },
    });
  }
  // 返回用户列表
  async list() {
    return await this.user.findAll();
  }
  // 注册
  async add(user) {
    return await this.user.create(user);
  }
}

module.exports = UserService;
