<template>
  <div class="index">
    <flexbox orient="vertical">
      <flexbox-item>
        <div class="flex-demo-top">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="flex-demo-content">
          <grid :cols="3" :show-lr-borders="false">
            <grid-item class="grid-content" :link="{ path: '/businessCharter/businessCharter_1'}">
              <img src="../../assets/公务包机.png" style="height: 40px;width: 40px;">
              <span class="grid-center">公务包机</span>
            </grid-item>
            <grid-item>
              <img src="../../assets/极致之旅.png" style="height: 40px;width: 40px;">
              <span class="grid-center">极致之旅</span>
            </grid-item>
            <grid-item>
              <img src="../../assets/特价飞行.png" style="height: 40px;width: 40px;">
              <span class="grid-center">特价飞行</span>
            </grid-item>
            <grid-item>
              <img src="../../assets/直升机业务.png" style="height: 40px;width: 40px;">
              <span class="grid-center">直升机业务</span>
            </grid-item>
            <grid-item>
              <img src="../../assets/飞悦汇.png" style="height:40px;width: 60px;">
              <span class="grid-center">飞悦汇</span>
            </grid-item>
            <grid-item>
              <img src="../../assets/航空基础设施.png" style="height: 40px;width: 40px;">
              <span class="grid-center">航空基础设施</span>
            </grid-item>
            <grid-item>
              <img src="../../assets/购机中心.png" style="height: 40px;width: 40px;">
              <span class="grid-center">购机中心</span>
            </grid-item>
            <grid-item>
              <img src="../../assets/航空沙龙.png" style="height: 40px;width: 40px;">
              <span class="grid-center">航空沙龙</span>
            </grid-item>
            <grid-item>
              <img src="../../assets/私照培训.png" style="height: 40px;width: 40px;">
              <span class="grid-center">私照培训</span>
            </grid-item>
          </grid>
        </div>
      </flexbox-item>
      <flexbox-item>
        <tabbar class="flex-demo-bottom">
          <tabbar-item selected>
            <span slot="label">
              <i class="iconfont icon-zhuye">首页</i>
            </span>
          </tabbar-item>
          <tabbar-item>
            <span slot="label">
              <i class="el-icon-news">媒体库</i>
            </span>
          </tabbar-item>
          <tabbar-item link="/">
            <span slot="label">
              <i class="iconfont icon-liebiaomoshi_kuai">全部</i>
            </span>
          </tabbar-item>
          <tabbar-item>
            <span slot="label">
              <i class="iconfont icon-geren">我的</i>
            </span>
          </tabbar-item>
        </tabbar>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import {
  Flexbox,
  FlexboxItem,
  Grid,
  GridItem,
  Tabbar,
  TabbarItem,
  Group,
  Cell
} from "vux";

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data() {
    return {};
  }
};
</script>

<!-- 设置局部背景色 -->
<style lang="less">
@import "~vux/src/styles/1px.less";
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

.index {
  height: 100%;
  width: 100%;
}
.flex-demo-top {
  text-align: center;
  color: #fff;
  border-radius: 4px;
  background-clip: padding-box;
  height: 200px;
}
.flex-demo-content {
  text-align: center;
  color: #fff;
  border-radius: 4px;
  background-clip: padding-box;
  height: 100%;
}
.flex-demo-bottom {
  position: fixed;
  left: 0px;
  bottom: 0px;
  margin: auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.grid-content {
  display: block;
  text-align: center;
  color: #666;
  height: 30%;
  width: 30%;
}
.grid-center {
  display: block;
  text-align: center;
  color: #666;
  height: 50px;
}
.weui-grids {
  background-color: #fff;
}
</style>