<template>
    <div>
        <divider> {{('公务包机') }} </divider>
        <flexbox orient="vertical">
            <flexbox-item>
                <!-- 设置上下边距0px，左右20px -->
                <div style="padding:0px 20px">
                    <el-steps :active="active" finish-status="success" align-center>
                        <el-step title="飞行计划"></el-step>
                        <el-step title="选择机型"></el-step>
                        <el-step title="提交预订单"></el-step>
                        <el-step title="支付定金"></el-step>
                    </el-steps>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo">
                    <button-tab>
                        <button-tab-item selected @on-item-click="changeTopIndex(1)">单程</button-tab-item>
                        <button-tab-item @on-item-click="changeTopIndex(2)">往返</button-tab-item>
                        <button-tab-item @on-item-click="changeTopIndex(3)">联程</button-tab-item>
                    </button-tab>
                </div>
                <div v-if="topIndex==1">
                    <p style="padding:5px 0px;border-bottom:1px solid #ccc;"><img src="../../assets/小飞机图标.png" /> 行程信息</p>
                    <div style="padding:10px 20px">出发时间：
                        <el-button round @click="changeDepartureTime()">{{ this.departureTime }}</el-button>
                        <div v-transfer-dom>
                            <popup v-model="showPopup">
                                <datetime-view v-model="departureTime" :format="format"></datetime-view>
                            </popup>
                        </div>
                    </div>
                    <div style="padding:10px 20px">出发城市：
                        <el-button round @click="changeDeparturePlace()">{{ this.departurePlaceName }}</el-button>
                        <x-address style="display:none;" title="" v-model="departurePlace" @on-shadow-change="onShadowChange1" :list="addressData" :show.sync="showAddress1" :hide-district="hideDistrict"></x-address>
                    </div>
                    <div style="padding:10px 20px">到达城市：
                        <el-button round @click="changeArrivalPlace()">{{ this.arrivalPlaceName }}</el-button>
                        <x-address style="display:none;" title="" v-model="arrivalPlace" @on-shadow-change="onShadowChange2" :list="addressData" :show.sync="showAddress2" :hide-district="hideDistrict"></x-address>
                    </div>
                    <div style="padding:10px 20px">乘机人数：
                        <el-input-number v-model="roundValue" :min="1" :max="10"></el-input-number>
                    </div>
                    <div style="padding:10px 20px">
                        <x-button type="primary" style="border-radius:99px;">下一步</x-button>
                    </div>
                </div>
                <div v-else-if="topIndex==2">这是往返界面</div>
                <div v-else>这是联程界面</div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo">
                    <tab>
                        <tab-item selected @on-item-click="changeBottomIndex(1)">我们的特色</tab-item>
                        <tab-item @on-item-click="changeBottomIndex(2)">精彩内容</tab-item>
                        <tab-item @on-item-click="changeBottomIndex(3)">包机流程</tab-item>
                    </tab>
                </div>
                <div v-if="bottomIndex==1">我们的特色</div>
                <div v-else-if="bottomIndex==2">精彩内容</div>
                <div v-else>包机流程</div>
            </flexbox-item>
        </flexbox>
        <br>
    </div>
</template>

<script>
import {
  Flexbox,
  FlexboxItem,
  Divider,
  ButtonTab,
  ButtonTabItem,
  Tab,
  TabItem,
  Sticky,
  XButton,
  Swiper,
  SwiperItem,
  XAddress,
  ChinaAddressV4Data,
  Cell,
  Value2nameFilter as value2name,
  Group,
  DatetimeView,
  Popup,
  TransferDom
} from "vux";

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Divider,
    ButtonTab,
    ButtonTabItem,
    Tab,
    TabItem,
    Sticky,
    XButton,
    Swiper,
    SwiperItem,
    XAddress,
    Cell,
    Group,
    DatetimeView,
    Popup
  },
  directives: {
    TransferDom
  },
  data() {
    return {
      active: 0,
      topIndex: 1,
      bottomIndex: 1,
      departureTime: '1996-01-01 01:01',
      roundValue: 1,
      title: "默认为空",
      hideDistrict: true,
      departurePlace: [],
      departurePlaceName: "请选择",
      arrivalPlace: [],
      arrivalPlaceName: "请选择",
      addressData: ChinaAddressV4Data,
      showAddress1: false,
      showAddress2: false,
      showPopup: false,
      format: 'YYYY-MM-DD HH:mm'
    };
  },
//   watch: {
//     departurePlace: function(newValue, oldValue) {
//       console.log("departurePlace变化:" + oldValue + "-->" + newValue);
//     },
//     arrivalPlace: function(newValue, oldValue) {
//       console.log("arrivalPlace变化:" + oldValue + "-->" + newValue);
//     }
//   },
  methods: {
    changeTopIndex(index) {
      this.topIndex = index;
    },
    changeBottomIndex(index) {
      this.bottomIndex = index;
    },
    changeDepartureTime(){
        this.showPopup=true;
    },
    changeDeparturePlace() {
      this.showAddress1 = true;
    },
    changeArrivalPlace() {
      this.showAddress2 = true;
    },
    onShadowChange1(ids, names) {
      this.departurePlaceName = names[0] + names[1];
    },
    onShadowChange2(ids, names) {
      this.arrivalPlaceName = names[0] + names[1];
    }
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/1px.less";

.flex-demo {
  text-align: center;
  border-radius: 4px;
  background-clip: padding-box;
}
</style>
