<template>
    <div>
        <divider> {{('选择机型') }} </divider>
        <div>
            <flexbox orient="vertical">
                <flexbox-item v-for="item in list" :key="item.id">
                    <div>
                        <router-link to="/index">
                            <img v-lazy="item.src" class="images" /></router-link>
                        <p>{{item.title}}
                            <router-link to="/index" style="float:right">查看预报价单</router-link>
                        </p>
                    </div>
                </flexbox-item>
            </flexbox>
            <!-- <panel :list="list" :type="type" @on-img-error="onImgError"> -->
            <!-- </panel> -->
        </div>
        <div v-transfer-dom>
            <loading :show="showLoading" :text="loadingText"></loading>
        </div>
        <div v-if="theEnd">
            <x-button plain type="primary" style="border-radius:99px;" @click.native="loadMore()">加载更多</x-button>
        </div>
        <divider v-else> {{('已经到底了~') }} </divider>
    </div>
</template>

<script>
import {
  Divider,
  Group,
  Radio,
  XButton,
  Loading,
  Flexbox,
  FlexboxItem,
  TransferDomDirective as TransferDom
} from "vux";

export default {
  components: {
    Divider,
    Group,
    Radio,
    XButton,
    Loading,
    Flexbox,
    FlexboxItem
  },
  directives: {
    TransferDom
  },
  data() {
    return {
      url: "",
      theEnd: true,
      showLoading: false,
      loadingText: "正在加载",
      type: "2",
      list: [
        {
          id: "111111",
          src: "http://yunlingfly.cn/%E6%B9%BE%E6%B5%81G450_16%E5%BA%A7.jpg",
          fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          title: "标题一",
          desc:
            "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          url: "/index"
        },
        {
          id: "222222",
          src: "http://yunlingfly.cn/%E8%B1%AA%E5%AE%A2900XP_8%E5%BA%A7.png",
          title: "标题二",
          desc:
            "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          url: {
            path: "/index",
            replace: false
          },
          meta: {
            source: "来源信息",
            date: "时间",
            other: "其他信息"
          }
        }
      ],
      moreData: {}
    };
  },
  methods: {
    onImgError(item, $event) {
      console.log(item, $event);
    },
    loadMore() {
      this.showLoading = true;
      this.loadMoreData();
    },
    loadMoreData() {
      // 开发环境使用 easy-mock 数据，正式环境使用 json 文件
      if (process.env.NODE_ENV === "development") {
        this.url = "http://localhost:8082/user/loadMore";
      }
      this.$axios.post(this.url).then(res => {
        console.log("返回值：" + res.data.hasNext);
        if (res.data.hasNext == "false") {
          this.theEnd = false;
        } else {
          this.moreData = res.data;
          this.list.push(this.moreData);
        }
        this.showLoading = false;
      });
    }
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/1px.less";

.images {
  height: 150px;
  width: 100%;
}
</style>
