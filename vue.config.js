const { defineConfig } = require("@vue/cli-service");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Hello world'
      })
    ]
  },
  transpileDependencies: true,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: {
            "postcss-pxtorem": {
              rootValue: 37.5, // 设计稿尺寸 / 10，例如设计稿宽度为750px，则 rootValue 为 75
              propList: ["*"],
            },
          },
        },
      },
      less: {
        // 全局变量
        additionalData: `
          @color-primary: #ff0000;
        `,
      },
    },
  },
});
