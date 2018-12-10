<template>
  <div>
    <divider> {{('预报价单') }} </divider>
    <div>
      <flexbox orient="vertical">
        <flexbox-item>
          <div>
            <p style="padding:5px 0px;border-bottom:1px solid #ccc;"><img src="../../assets/小飞机图标.png" /> 航班信息</p>
            <x-table :cell-bordered="false" style="background-color:#fff;" v-for="i in item.parameter" :key="getKeyId()" v-model="item">
              <thead>
                <tr style="background-color: #F7F7F7;">
                  <th>{{i.time}}</th>
                  <th>{{i.type}}</th>
                </tr>
              </thead>
              <tbody class="parameterFont">
                <tr>
                  <td>{{i.from}}</td>
                  <td>{{i.to}}</td>
                </tr>
                <tr>
                  <td>飞行时间</td>
                  <td>{{i.time}}</td>
                </tr>
              </tbody>
            </x-table>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div>
            <p style="padding:5px 0px;border-bottom:1px solid #ccc;"><img src="../../assets/小飞机图标.png" /> 报价信息</p>
            <p>
              <span>机型：{{item.type}}</span>
              <span style="float:right">载客数：16</span>
            </p>
            <p>预估价：
              <span style="color:#ec0606">￥</span>
              <span style="color:#ec0606">{{item.minPrice}}</span>
              <span style="color:#ec0606">~</span>
              <span style="color:#ec0606">{{item.maxPrice}}</span>
            </p>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div>
            <p style="padding:5px 0px;border-bottom:1px solid #ccc;"><img src="../../assets/小飞机图标.png" /> 温馨提示</p>
            <p style="color:#dcf310">*以上报价包含机场贵宾服务、普通餐食和空中乘务员服务。</p>
            <p style="color:#dcf310">请您注意，该报价不包含旅客往来机场交通、特殊餐食点单以及指定的特殊贵宾厅服务（如有）</p>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div>
            <p style="padding:5px 0px;border-bottom:1px solid #ccc;"><img src="../../assets/小飞机图标.png" /> 飞机外观图</p>
            <img v-lazy="item.outsideView" class="images" />
          </div>
        </flexbox-item>
        <flexbox-item>
          <div>
            <p style="padding:5px 0px;border-bottom:1px solid #ccc;"><img src="../../assets/小飞机图标.png" /> 客舱图</p>
            <img v-lazy="item.externalView" class="images" />
          </div>
        </flexbox-item>
      </flexbox>
      <x-button type="primary" style="border-radius:99px;">下一步</x-button>
    </div>
  </div>
</template>

<script>
import { Divider, Flexbox, FlexboxItem, XTable, XButton } from "vux";
let keyId = 0;
export default {
  components: {
    Divider,
    Flexbox,
    FlexboxItem,
    XTable,
    XButton
  },
  data() {
    return {
      url: "",
      item: {
        id: "111111",
        type: "湾流G450",
        minPrice: "297500.00",
        maxPrice: "315000.00",
        outsideView:
          "http://yunlingfly.cn/%E6%B9%BE%E6%B5%81G450_16%E5%BA%A7.jpg",
        externalView:
          "http://yunlingfly.cn/%E8%B1%AA%E5%AE%A2900XP_8%E5%BA%A7.png",
        fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
        title: "标题一",
        parameter: [
          {
            time: "2018-12-10",
            type: "调机",
            from: "深圳(SZX)",
            to: "大连(DLC)",
            time: "04:12"
          },
          {
            time: "2018-12-10",
            type: "公务",
            from: "大连(DLC)",
            to: "厦门(XMN)",
            time: "03:38"
          }
        ]
      }
    };
  },
  methods: {
    getKeyId() {
      return ++keyId;
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

.parameterFont {
  color: #070ab3;
}
</style>
