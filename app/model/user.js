module.exports = app => {
  const { STRING, DATE } = app.Sequelize;
  const User = app.model.define('user', {
    user_id: {
      type: STRING,
      primaryKey: true,
    },
    user_name: STRING,
    password: STRING,
    group_id: STRING,
    created_at: DATE,
    updated_at: DATE,
  }, {
    tableName: 'user',
  });
  return User;
};
