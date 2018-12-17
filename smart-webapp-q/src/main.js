// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//解决安卓键盘挡住input问题
import $fixedInput from '@/common/fixedInput.js';
Vue.use($fixedInput);

//注入全局组件
import '@/components/install.js';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
