const configModule = require(process.env.WEBPACK_CONFIG_COMMON);
const commonConfig = configModule.makeConfig();
// const componentNameSpace = configModule.getComponentNameSpace();

// const moreExternals = Object.assign({}, commonConfig.externals, {
//     // here more externals
// });

module.exports = Object.assign({}, commonConfig, {
    // here the app specific configs
    // externals: moreExternals
});
