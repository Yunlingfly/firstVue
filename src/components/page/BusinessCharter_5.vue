<template>
  <div>
    <divider> {{('提交订单') }} </divider>
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
        <div>
          <p style="padding:5px 0px;border-bottom:1px solid #ccc;"><img src="../../assets/小飞机图标.png" /> 预订人信息</p>
        </div>
        <group label-width="4em" label-margin-right="1em" label-align="left">
          <x-input title="姓名" v-model="form.name" placeholder="姓名"></x-input>
          <x-input title="手机号" v-model="form.phone" placeholder="手机号"></x-input>
          <x-input title="验证码" v-model="form.vCode" placeholder="请填写手机验证码" class="weui-vcode">
            <x-button slot="right" type="primary" mini @click.native="sendVCode()">发送验证码</x-button>
          </x-input>
          <x-input title="电子邮箱" v-model="form.email" placeholder="请务必填写真实邮箱"></x-input>
          <x-textarea title="留言" placeholder="请填写详细信息" :show-counter="false" :rows="3">
          </x-textarea>
          <x-input title="代理码" v-model="form.agentCode" placeholder="输入代理码"></x-input>
        </group>
      </flexbox-item>
      <flexbox-item>
        <div>
          <p style="padding:5px 0px;border-bottom:1px solid #ccc;"><img src="../../assets/小飞机图标.png" /> 标准餐食</p>
        </div>
        <radio :options="radioValue" v-model="meals"></radio>
      </flexbox-item>
      <flexbox-item>
        <div>
          <p style="padding:5px 0px;border-bottom:1px solid #ccc;"><img src="../../assets/小飞机图标.png" /> 可选服务</p>
        </div>
        <div style="padding:5px 0px;text-align: center;">
          <x-button mini plain type="primary" style="border-radius:99px;">+ 升级餐食酒水</x-button>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div>
          <p style="padding:5px 0px;border-bottom:1px solid #ccc;"><img src="../../assets/小飞机图标.png" /> 报价信息</p>
          <p>订单预计总额：
            <span style="float:right">
              <span>￥ 297500.00</span>
              <span>~</span>
              <span>315000.00</span>
            </span>
          </p>
          <p style="color:rgba(158, 135, 135, 0.733)">预付定金：
            <span style="float:right">￥ 9800</span>
          </p>
          <p style="color:rgba(158, 135, 135, 0.733)">可选服务费：
            <span style="float:right">+￥ 0</span>
          </p>
          <p style="color:rgba(158, 135, 135, 0.733)">渠道优惠率：
            <span style="float:right">-￥ 0/小时</span>
          </p>
          <p style="color:rgba(158, 135, 135, 0.733)">会员优惠率：
            <span style="float:right">-￥ 96折</span>
          </p>
          <p style="color:#ec0606;float:right">预付定金：
            <span>￥ 9800</span>
          </p>
        </div>
      </flexbox-item>
    </flexbox>
     <router-link to="/index"><x-button type="primary" style="border-radius:99px;">提交预订单</x-button></router-link>
  </div>
</template>

<script>
import {
  Divider,
  Flexbox,
  FlexboxItem,
  GroupTitle,
  Group,
  XInput,
  XTextarea,
  XButton,
  Radio
} from "vux";

export default {
  components: {
    Divider,
    Flexbox,
    FlexboxItem,
    GroupTitle,
    Group,
    XInput,
    XTextarea,
    XButton,
    Radio
  },
  data() {
    return {
      active: 2,
      form: {
        name: "",
        phone: "",
        vCode: "",
        email: "",
        message: "",
        agentCode: ""
      },
      radioValue: ["公务机包机套餐1", "公务机包机套餐2", "公务C"],
      meals: "公务机包机套餐1"
    };
  },
  methods: {
    sendVCode() {
      console.log("发送验证码");
    }
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/1px.less";
</style>
