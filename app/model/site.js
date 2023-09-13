module.exports = app => {
  const { STRING, DATE } = app.Sequelize;
  const Site = app.model.define('site', {
    site_id: {
      type: STRING,
      primaryKey: true,
    },
    site_name: STRING,
    group_id: STRING,
    creator_id: STRING,
    created_at: DATE,
    updated_at: DATE,
  }, {
    tableName: 'site',
  });
  return Site;
};
