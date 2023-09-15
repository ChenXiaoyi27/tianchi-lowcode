module.exports = {
  sequelize: {
    dialect: 'mysql',
    host: 'rm-bp1g9178k3ax0399l9o.mysql.rds.aliyuncs.com', // (docker)tianchi-mysql: '114.55.85.81', // 本地docker启动：mysql；本地开发：127.0.0.1
    port: 3306, // docker:3307; 本地docker启动：3306；本地开发：3306
    username: 'cxy',
    password: 'Cxy22227777',
    database: 'lowcode',
  },
};
