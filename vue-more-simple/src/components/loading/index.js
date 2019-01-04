import loading from './loading.vue';

export default{
	install(Vue){
		if(typeof window != undefined && window.Vue) {
			Vue = window.Vue;
		}
		Vue.component('loading',loading);
	}
}
