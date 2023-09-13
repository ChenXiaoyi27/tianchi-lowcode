module.exports = app => {
  const { STRING, DATE } = app.Sequelize;
  const Page = app.model.define('page', {
    page_id: {
      type: STRING,
      primaryKey: true,
    },
    page_name: STRING,
    lock: STRING,
    created_at: DATE,
    updated_at: DATE,
    creator_id: STRING,
    updater_id: STRING,
    site_id: STRING,
  }, {
    tableName: 'page',
  });
  return Page;
};
