const { injectBabelPlugin } = require("react-app-rewired");
module.exports = function override(config, env) {
    config = injectBabelPlugin(
        // 插件名， 插件配置
        [
            "import",
            {
                libraryName: 'antd', 
                libraryDirectory: 'es', 
                style: 'css'
            }
        ],
        config
    );
    return config;
};