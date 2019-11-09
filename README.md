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

- yarn add react-app-rewired customize-cra babel-plugin-import

- 在根目录中配置 config-overrides.js

- yarn add less less-loader 自定义主题

```
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

## 引入路由

- yarn add react-router-dom

## react-devtools react调试工具安装

-  https://github.com/facebook/react-devtools ； 下载地址

- git clone https://github.com/facebook/react-devtools.git

- git checkout v3

- npm --registry https://registry.npm.taobao.org install

- npm run build:extension:chrome 生成一个文件 react-devtools -> shells -> chrome -> build 下的unpacked文件

- 打开chrome扩展程序chrome://extensions/，加载已解压的扩展程序 unpacked文件
