module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 37.5, // 设计稿尺寸 / 10，例如设计稿宽度为750px，则 rootValue 为 75
      propList: ["*"],
    },
  },
};
