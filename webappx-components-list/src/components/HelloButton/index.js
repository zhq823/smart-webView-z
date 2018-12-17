import HelloButton from './HelloButton.vue';

export default{
	install(Vue){
		if(typeof window !== 'undefined' && window.Vue) {
			Vue = window.Vue;
		}
		Vue.component('hello-button', HelloButton)
	}
}
