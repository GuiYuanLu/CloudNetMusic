<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">
        <span>发现好歌单</span>
      </div>
      <div class="more">
        <span>查看更多</span>
      </div>
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="150"
        class="my-swpier"
        :show-indicators="false"
      >
        <van-swipe-item v-for="item in this.musicList" :key="item">
          <router-link :to="{ path: '/itemMusic', query: { id: item.id } }">
            <img :src="item.picUrl" />
            <span class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-play"></use>
              </svg>
              {{ changCount(item.playCount) }}
            </span>
            <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import { getGoodMusic } from "@/request/api/home.js";
export default {
  data() {
    return {
      musicList: [],
    };
  },
  methods: {
    async getGedan() {
      const res = await getGoodMusic();
      if (res.status === 200) {
        this.musicList = res.data.result;
      }
    },
    changCount: function (num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    },
  },
  mounted() {
    this.getGedan();
  },
};
</script>
<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4rem;
    .title {
      font-weight: 900;
      font-size: 0.4rem;
    }
    .more {
      border: 1px solid #ccc;
      line-height: 0.6rem;
      text-align: center;
      border-radius: 0.4rem;
      padding: 0 0.2rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 3.6rem;

    .van-swipe-item {
      //   margin-right: 0.14rem;
      padding-right: 0.2rem;
      position: relative;
      height: 3.8rem;
      img {
        width: 100%;
        height: 2.4rem;
        border-radius: 0.3rem;
        //   position: absolute;
      }
      .playCount {
        position: absolute;
        z-index: 100;
        right: 0.3rem;
        color: white;
        margin-top: 0.06rem;
        .icon {
          width: 0.3rem;
          height: 0.3rem;
        }
      }
      .name {
        //   position: absolute;
        bottom: 0px;
      }
    }
  }
}
</style>


