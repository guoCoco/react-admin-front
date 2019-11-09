// const { injectBabelPlugin } = require("react-app-rewired");
// module.exports = function override(config, env) {
//     config = injectBabelPlugin(
//         // 插件名， 插件配置
//         [
//             "import",
//             {
//                 libraryName: 'antd', 
//                 libraryDirectory: 'es', 
//                 style: 'css'
//             }
//         ],
//         config
//     );
//     return config;
// };

const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 修改主题颜色
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
);