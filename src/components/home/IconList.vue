<template >
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-meirituijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sirenFM"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zuixingedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paixingbang-active"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.iconList {
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.4rem;
  .iconItem {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      margin-top: 0.2rem;
    }
    .icon {
      height: 0.8rem;
      width: 0.8rem;
    }
  }
}
</style>