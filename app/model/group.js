module.exports = app => {
  const { STRING, DATE } = app.Sequelize;
  const Group = app.model.define('group', {
    group_id: {
      type: STRING,
      primaryKey: true,
    },
    group_name: STRING,
    created_at: DATE,
    updated_at: DATE,
  }, {
    tableName: 'group',
  });
  return Group;
};
