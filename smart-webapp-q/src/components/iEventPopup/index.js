import iEventPopup from "./iEventPopup.vue";

export default {
	install(Vue) {
		if(typeof window !== 'undefined' && window.Vue) {
			Vue = window.Vue;
		}
		Vue.component('ievent-popup', iEventPopup)
	}
}