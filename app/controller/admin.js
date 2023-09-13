'use strict';

const { Controller } = require('egg');

class AdminController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async saveSchema() {
    const { ctx } = this;
    const { schema } = ctx.request.body;
    ctx.body = {
      success: true,
      data: schema,
    };
  }
}

module.exports = AdminController;
