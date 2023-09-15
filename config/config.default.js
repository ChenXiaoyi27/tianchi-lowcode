/* eslint valid-jsdoc: "off" */

'use strict';
const prodConfig = require('./config.prod');
const dockerConfig = require('./config.docker');
const devConfig = require('./config.dev');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const env = 'prod';// 代码提交只能用prod。生产-prod，镜像-docker，本地-dev
const extraConfig = {
  prod: prodConfig, // 阿里云生产
  docker: dockerConfig, // 本地docker-compose启动
  dev: devConfig, // 本地启动
};
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1693470307971_1368';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: {
      enable: false,
      // ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
      // queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
      // bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
    },
  };

  // config.mysql = {
  //   client: {
  //     host: 'mysql',
  //     port: '3306',
  //     user: 'root',
  //     password: '123456',
  //     database: 'lowcode',
  //   },
  //   app: true,
  //   agent: false,
  // };

  // config.sequelize = {
  //   dialect: 'mysql',
  //   host: 'rm-bp1g9178k3ax0399l9o.mysql.rds.aliyuncs.com', // (docker)tianchi-mysql: '114.55.85.81', // 本地docker启动：mysql；本地开发：127.0.0.1
  //   port: 3306, // docker:3307; 本地docker启动：3306；本地开发：3306
  //   username: 'cxy',
  //   password: 'Cxy22227777',
  //   database: 'lowcode',
  // };
  config.sequelize = extraConfig[env].sequelize;

  config.session = {
    key: 'EGG_SESS', // eggjs默认session的key
    maxAge: 24 * 3600 * 1000, // 1 day
    httpOnly: true,
    encrypt: true,
    renew: true, // 每次访问页面都会给session会话延长时间
  };

  return {
    ...config,
    ...userConfig,
  };
};
