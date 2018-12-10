<template>
  <div>
    <divider> {{('机型详情') }} </divider>
    <div>
      <flexbox orient="vertical">
        <flexbox-item>
          <div>
            <p style="padding:5px 0px;border-bottom:1px solid #ccc;"><img src="../../assets/小飞机图标.png" /> 外观图</p>
            <img v-lazy="item.outsideView" class="images" />
          </div>
        </flexbox-item>
        <flexbox-item>
          <div>
            <p style="padding:5px 0px;border-bottom:1px solid #ccc;"><img src="../../assets/小飞机图标.png" /> 飞机参数</p>
            <x-table :cell-bordered="false" style="background-color:#fff;" v-model="item">
              <thead>
                <tr style="background-color: #F7F7F7">
                  <th>{{item.parameter.name}}</th>
                  <th>{{item.parameter.type}}</th>
                </tr>
              </thead>
              <tbody class="parameterFont">
                <tr>
                  <td>座位数：{{item.parameter.seatNum}}</td>
                  <td>最大航程：{{item.parameter.maxVoyage}} km</td>
                </tr>
                <tr>
                  <td>巡航速度：{{item.parameter.cruisingSpeed}} km/h</td>
                  <td>巡航高度：{{item.parameter.cruisingAltitude}} m</td>
                </tr>
                <tr>
                  <td>长度：{{item.parameter.length}} m</td>
                  <td>宽度：{{item.parameter.width}} m</td>
                </tr>
                <tr>
                  <td>高度：{{item.parameter.height}} m</td>
                </tr>
              </tbody>
            </x-table>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div>
            <p style="padding:5px 0px;border-bottom:1px solid #ccc;"><img src="../../assets/小飞机图标.png" /> 内饰图</p>
            <img v-lazy="item.outsideView" class="images" />
          </div>
        </flexbox-item>
        <flexbox-item>
          <div>
            <p style="padding:5px 0px;border-bottom:1px solid #ccc;"><img src="../../assets/小飞机图标.png" /> 客舱布局</p>
            <img v-lazy="item.outsideView" class="images" />
            <img v-lazy="item.outsideView" class="images" />
          </div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import { Divider, Flexbox, FlexboxItem, XTable } from "vux";

export default {
  components: {
    Divider,
    Flexbox,
    FlexboxItem,
    XTable
  },
  data() {
    return {
      url: "",
      item: {
        id: "111111",
        outsideView:
          "http://yunlingfly.cn/%E6%B9%BE%E6%B5%81G450_16%E5%BA%A7.jpg",
        fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
        title: "标题一",
        parameter: {
          name: "湾流G450",
          seatNum: "16",
          type: "公务机",
          maxVoyage: "8061",
          cruisingSpeed: "871",
          cruisingAltitude: "13716",
          length: "12.29",
          width: "2.24",
          height: "1.88"
        }
      }
    };
  },
  methods: {}
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
