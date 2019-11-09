# react 后台管理项目前端
## 创建项目(使用create-react-app搭建)
- npm install -g create-react-app
- create-react-app react-admin
- cd react-admin
- npm start
- 在本地 http://localhost:3000 可以看到项目已经启动
## 构建目录结构
    src
        api        // ajax 请求相关目录
        components // 公共组件
        config    // 配置文件
        assets    // 静态资源
        pages     // 路由组件
        utils     // 工具函数目录
        index.js  // 入库文件
        App.js  // 根组件
## 按需引入 antd
- 下载antd
    -- yarn add antd
- npm i -S react-app-rewired@2.0.2-next.0 babel-plugin-import
- 在根目录中配置 config-overrides.js
```
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
```
- package.json文件下的 scripts 下的 react-scripts 替还成 react-app-rewired,记得重新启动项目
```
    "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
```
