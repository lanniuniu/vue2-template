<template>
  <van-tabbar
    class="tabbar"
    v-model="active"
    active-color="rgba(103, 40, 255, 1)"
    inactive-color="rgba(142, 155, 174, 1)"
  >
    <van-tabbar-item>
      <span>{{ $t("common.tabBar.wallet") }}</span>
      <template #icon="props">
        <img :src="props.active ? wallet.active : wallet.inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item>
      <span>{{ $t("common.tabBar.activity") }}</span>
      <template #icon="props">
        <img :src="props.active ? activity.active : activity.inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item>
      <span>{{ $t("common.tabBar.profile") }}</span>
      <template #icon="props">
        <img :src="props.active ? profile.active : profile.inactive" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      wallet: {
        active: require("./icon/1-2@2x.png"),
        inactive: require("./icon/1-1@2x.png"),
      },
      activity: {
        active: require("./icon/2-2@2x.png"),
        inactive: require("./icon/2-1@2x.png"),
      },
      profile: {
        active: require("./icon/3-2@2x.png"),
        inactive: require("./icon/3-1@2x.png"),
      },
    };
  },
};
</script>

<style lang="less" scoped>
.tabbar {
  width: 341px;
  height: 52px;
  border-radius: 12px;
  opacity: 1;
  border: none;
  bottom: 39px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  > &::after {
    border: none;
  }

  /deep/.van-tabbar-item {
    flex-direction: row;

    .van-tabbar-item__text {
      margin-left: 6px;
    }

    &--active {
      background: transparent;
    }
  }
}
</style>
