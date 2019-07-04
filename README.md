## 项目简介

- _此处省略....(简单描述该项目名称、描述、功能概览，由该项目前端开发者覆盖填写)_

## 安装

- yarn

## 本地启动

- yarn start，在浏览器中访问 [localhost:3000](http://localhost:3000/)
- 如果有后端服务请求，请到根目录下的 config 文件夹的 devServer.js 里面更改后端服务地址

## 发布构建

- 需要使用`Jenkins`构建发布
- 部分交付项目无`Jenkins`，使用`yarn build`构建至`dist`目录，使用`yarn local`启动服务访问`dist`目录

_关于 vendor_

我们的基础架构会将不常更改的三方库，例如 react、react-dom、redux、antd 等（配置`webpack/vendor.js`），打包到 vendor 目录（`webpack/vendor`）中。

需要注意的是，vendor 是由版本号控制（`webpack/config.js`第三行），每次修改`webpack/vendor.js`中的三方包，都需要将版本号+1，然后执行`yarn run vendor`。

在产品功能发布中，一个 vendor 版本号只能被构建一次，不允许重复使用一个版本号进行多次构建。

没有特殊情况，不要私自向 package.json 中添加三方依赖

## 前端相关技术文档及规范：

- [前端系统架构设计](http://192.168.199.171:8090/pages/viewpage.action?pageId=99582305)
- [前端代码风格统一规范](http://192.168.199.171:8090/pages/viewpage.action?pageId=98012857)
- [前端兼容性标准及适配准则](http://192.168.199.171:8090/pages/viewpage.action?pageId=91586653)
- [前端 git 分支版本管理及 code review](http://192.168.199.171:8090/pages/viewpage.action?pageId=99583379)
- [前端工程自动化构建、发布](http://192.168.199.171:8090/pages/viewpage.action?pageId=99582933)
