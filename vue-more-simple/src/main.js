// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// 引入rem.js
import './assets/js/rem';
//公共css样式
import '@/assets/css/public.css';

import { iStorage } from '@/common/iStorage.js';

//解决安卓键盘挡住input问题
//import $fixedInput from '@/common/fixedInput.js';
//Vue.use($fixedInput);

//smart-fixinput
import smartFixInput from 'smart-fixinput';
Vue.use(smartFixInput)

Vue.prototype.$iStorage = iStorage;
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue();
iStorage.set('tenant_code', 'lilly')
//mint-UI
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI)

//全局组件
import '@/components/install.js'

import nativeJsBridge from '@/controllers/nativeJsBridge.js';

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
