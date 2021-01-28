const configModule = require(process.env.WEBPACK_CONFIG_COMMON);
const commonConfig = configModule.makeConfig();
// const componentNameSpace = configModule.getComponentNameSpace();
commonConfig.module.rules[0].options.fix = true;

const moreExternals = Object.assign({}, commonConfig.externals, {
  // here more externals
  'cs-web-dashboard': 'cs-web-dashboard',
});

module.exports = Object.assign({}, commonConfig, {
   // here the app specific configs
   externals: moreExternals
});
