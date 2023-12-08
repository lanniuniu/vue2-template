<template>
  <div class="home">
    <section class="top">
      <NavBar :showSetting="true" />
    </section>
    <section class="middle">
      <div class=""></div>
      <div></div>
    </section>
    <section class="bottom">
      <TabBar />
    </section>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar/index.vue";
import NavBar from "@/components/NavBar/index.vue";
export default {
  name: "home",
  components: {
    TabBar,
    NavBar,
  },
};
</script>

<style scoped lang="less">
.home {
  width: 375px;

  > .top {
    width: 375px;
    height: 284px;
    background-image: linear-gradient(
      180deg,
      rgba(62, 0, 255, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  > .middle {
    width: 375px;
    height: 125px;
  }

  > .bottom {
    min-height: calc(100vh - 284px - 125px);
    margin: 0 auto;
    background: linear-gradient(180deg, #f6f5f8 0%, #efe8f9 100%);
    border-radius: 0px 0px 0px 0px;
    position: relative;

    // clear
    &::after {
      content: "";
      display: block;
      clear: both;
      height: 0;
      visibility: hidden;
      overflow: hidden;
    }
  }
}
</style>
