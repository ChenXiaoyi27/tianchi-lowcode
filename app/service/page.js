const Service = require('egg').Service;

class PageService extends Service {
  constructor(app) {
    super(app);
    const { ctx } = this;
    this.page = ctx.model.Page;
  }
  async add(page) {
    return this.page.create(page);
  }
  async list({ site_id }) {
    return this.page.findAll({
      where: {
        site_id,
      },
    });
  }
  // 获取锁状态，返回用户id或空，为空时表示未锁
  async getLock(page_id) {
    return this.page.findOne({
      attributes: ['lock'],
      where: {
        page_id,
      },
    });
  }
  // 锁/解锁
  async lock(page_id, status, user_id) {
    let newLock = '';
    if (status) {
      // 锁
      newLock = user_id;
    } else {
      // 解锁
    }
    return this.page.update({ lock: newLock }, {
      where: {
        page_id,
      },
    });
  }
  // 先不实现
  // async modify(page, version) {
  //   return this.page.update({ lastName: 'Doe' }, {
  //     where: {
  //       lastName: null,
  //     },
  //   });
  // }
  async deletePage(page_id) {
    return this.page.destroy({
      where: {
        page_id,
      },
    });
  }
}

module.exports = PageService;
