const configModule = require(process.env.WEBPACK_CONFIG_COMMON);
const commonConfig = configModule.makeConfig();
// const componentNameSpace = configModule.getComponentNameSpace();

const moreExternals = {
    ...commonConfig.externals,
    // here more externals
    'cs-web-dashboard': 'cs-web-dashboard',
};

module.exports = {
    ...commonConfig,
    // here the app-specific configs
    externals: moreExternals,
};
