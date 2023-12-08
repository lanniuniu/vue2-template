<template>
  <van-nav-bar class="navbar">
    <template #left>
      <span class="left" v-show="showBack" @click="$router.go(-1)">
        <van-icon name="arrow-left" size="18" color="#000" />
      </span>
      <span class="left" v-show="!showBack"> </span>
    </template>
    <template #right>
      <span v-show="showSetting">
        <img
          src="./icon/setting@2x.png"
          alt="setting"
          style="width: 24px; height: 24px"
        />
      </span>
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    showSetting: {
      type: Boolean,
      default: false,
    },
    showBack: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.navbar {
  width: 375px;
  height: 64px;
  background: transparent;

  &::after {
    border: none;
  }

  /deep/.van-nav-bar__content {
    height: 100%;
    .van-nav-bar__left {
      padding-left: 12px;
      display: flex;
      align-items: center;

      .left {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
