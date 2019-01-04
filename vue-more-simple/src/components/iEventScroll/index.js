import iEventScroll from "./iEventScroll.vue";

export default {
	install(Vue) {
		if(typeof window !== 'undefined' && window.Vue) {
			Vue = window.Vue;
		}
		Vue.component('ievent-scroll', iEventScroll)
	}
}