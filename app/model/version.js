module.exports = app => {
  const { STRING, DATE } = app.Sequelize;
  const Version = app.model.define('version', {
    version_id: {
      type: STRING,
      primaryKey: true,
    },
    old_version_id: STRING,
    page_id: STRING,
    version_creator_id: STRING,
    version_schema: STRING,
    version_note: STRING,
    created_at: DATE,
    updated_at: DATE,
  }, {
    tableName: 'version',
  });
  return Version;
};
