# 静态网页生成

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# lint code
npm run lint

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

> 主要用于生成静态网站，当然vue不兼容ie8及以下
1. 可以用vue组件化的方式开发静态网站，组件化的好处就是便于维护很多公共模块
2. 支持sass，autoprefix，图片 字体 css js文件压缩
3. 目前只支持一级静态目录，有需要再加嘛
4. 除了vue vue-router vue-cli三个固有模块以外，主要依赖于[prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin)预编译插件，用于生成静态html文件，[vue-meta](https://github.com/declandewet/vue-meta)用于动态设置每个页面的头部信息
5. 其实[nuxt](https://zh.nuxtjs.org/guide/commands)是有这个功能的，但是总要有点探索精神吧😄
