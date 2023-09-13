const uuid = require('uuid');
const Controller = require('egg').Controller;

class UserController extends Controller {
  async find() {
    const { ctx } = this;
    const userId = ctx.session.user_id;
    const userInfo = await ctx.service.user.find(userId);
    ctx.body = {
      success: true,
      message: null,
      data: userInfo,
    };
  }
  // 返回用户列表
  async list() {
    const { ctx } = this;
    const list = await ctx.service.user.list();
    ctx.body = {
      success: true,
      message: null,
      data: list,
    };
  }
  // 注册
  async add() {
    const { ctx } = this;
    // 注册信息
    const { user_name, password, group_id } = ctx.request.body;
    const now = new Date();
    const user = {
      user_id: uuid.v4(),
      user_name,
      password, // 密码
      create_at: now, // 注册时间
      group_id, // 小组id，随意设置，先不暴露出来；实现时，需要支持多个组
    };
    await ctx.service.user.add(user);
    ctx.body = {
      success: true,
      message: null,
      data: null,
    };
  }
  // 登录
  async login() {
    const { ctx } = this;
    // 登录信息
    const { user_name, password } = ctx.request.body;
    const target_user = await ctx.service.user.findByName(user_name);
    console.log('target_user: ', target_user);
    if (target_user && password === target_user.password) {
      // 设置用户id到session
      ctx.session.user_id = target_user.user_id;
      console.log('ctx.session: ', ctx.session);
      ctx.body = {
        success: true,
        message: null,
        data: null,
      };
    } else {
      ctx.body = {
        success: false,
        message: '用户名或密码错误',
        data: null,
      };
    }
  }
  // 退出登录
  async logout() {
    const { ctx } = this;
    ctx.session = null;
    ctx.body = {
      success: true,
      message: null,
      data: null,
    };
  }
}

module.exports = UserController;
