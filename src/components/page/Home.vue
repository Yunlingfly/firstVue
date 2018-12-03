<template>
    <div>
        <!-- 指令是带有 v- 前缀的特殊属性。指令用于在表达式的值改变时，将某些行为应用到 DOM 上 -->
        <!-- v-html 可以输出html代码 -->
        <div v-html="htmlMessage"></div>
        <!-- v-bind 可以绑定属性，下面的代码表示当class1为true的时候class="class1" -->
        <div id="class1">
            <!-- v-model 可以实现双向数据绑定，例如：根据表单上的值，自动更新绑定的元素的值 -->
            <label for="r1">修改颜色&显示段落</label><input type="checkbox" v-model="class2">
            <br>
            <!-- v-bind 绑定属性中的值，如果有多个值用','分隔即可'，后一个可以覆盖前一个 -->
            <div v-bind:class="{class1: class1,'class2':class2}">
                v-bind:class 指令
            </div>
        </div>
        <!-- v-on 用来绑定事件 -->
        <div id="on">
            <button v-on:click="onClick()">点我</button>
        </div>
        <div id="seen">
            <!-- v-if 根据值选择性显示 -->
            <p v-if="class1">现在你看到我了</p>
        </div>
        <!-- 参数可以在指令后以冒号指明。例如，v-bind 指令被用来响应地更新 HTML 属性 -->
        <div id="href">
            <pre><a v-bind:href="url">yunlingfly</a></pre>
        </div>
        <!-- 过滤器由管道符"|"指示，过滤器函数接受表达式的值作为第一个参数。例如下面定义capitalize过滤器将message值的第一个字母大写。
        过滤器可以串联使用多个|分隔，也可以接受参数 -->
        <div id="message">
            {{ message | capitalize }}
        </div>
        <div id="shorthand">
            <span>v-bind和v-on的简写形式，' : '与' @ '</span>
            <!-- v-bind:href="url"的缩写 -->
            <a :href="url">yunlingfly</a>
            <!-- v-on:click="doSomething"的缩写 -->
            <a @click="onClick()">yunlingfly</a>
        </div>
        <div id="for">
            <table border="1">
                <!-- v-for 迭代对象，参数分别为 键值,键名,索引 -->
                <tr v-for="(value, key, index) in form" v-bind:key=key>
                    <td>
                        {{ index }} : {{ key }} : {{ value }}
                    </td>
                </tr>
            </table>
        </div>
        <div id="click">
            <!-- 阻止单击事件冒泡 -->
            <a v-on:click.stop="onClick()"></a>
            <!-- 提交事件不再重载页面 -->
            <form v-on:submit.prevent="onClick()"></form>
            <!-- 修饰符可以串联  -->
            <a v-on:click.stop.prevent="onClick()"></a>
            <!-- 只有修饰符 -->
            <form v-on:submit.prevent></form>
            <!-- 添加事件侦听器时使用事件捕获模式 -->
            <div v-on:click.capture="onClick()">click.capture</div>
            <!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
            <div v-on:click.self="onClick()">click.self</div>
            <!-- click 事件只能点击一次，2.1.4版本新增 -->
            <a v-on:click.once="onClick()">click.once</a>
        </div>
        <div>
            <runoob message="4545"></runoob>
        </div>
    </div>
</template>

<script>
export default {
  name: "test",
  // data 数据集
  data() {
    return {
      test: "",
      url: "http://www.yunlingfly.cn",
      tableData: [],
      htmlMessage: "<h1>测试消息</h1>",
      message: "this is message",
      class1: true,
      class2: false,
      form: {
        name: "name",
        sex: "sex",
        status: "1"
      },
      style1:{
        background:"#ccc"
      }
    };
  },
  // created 页面被创建时触发
  created() {
    this.getData();
  },
  // computed 带有缓存的方法(当值改变时才会更新)
  computed: {},
  // watch 可以监听属性的变化
  watch: {
    class2: function(newValue, oldValue) {
      console.log("class2变化:" + oldValue + "-->" + newValue);
    }
  },
  // methods 方法
  methods: {
    getData() {},
    onClick() {
      alert("这是一个弹窗");
    }
  },
  // filters 过滤器
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  // components 自定义组件标签
  components: {
    runoob: {
      props: ["message"],
      template: '<h2>自定义组件!{{message}}</h2>'
    }
  }
};
</script>

<style scoped>
.class1 {
  background: rgb(51, 46, 6);
  color: #eee;
}
.class2 {
  background: rgb(233, 12, 41);
  color: #eee;
}
</style>