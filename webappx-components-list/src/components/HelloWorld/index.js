import HelloWorld from "./HelloWorld.vue";

export default {
	install(Vue) {
		if(typeof window !== 'undefined' && window.Vue) {
			Vue = window.Vue;
		}
		Vue.component('hello-world', HelloWorld)
	}
}