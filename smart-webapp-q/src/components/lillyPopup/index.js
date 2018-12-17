import lillyPopup from './lillyPopup.vue';

export default {
	install(Vue) {
		if(typeof window !== 'undefined' && window.Vue) {
			Vue = window.Vue;
		}
		Vue.component('lilly-popup', lillyPopup)
	}
}
