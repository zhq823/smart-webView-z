import Vue from 'vue';
import Router from 'vue-router';
//const HelloWorld = () => import("@/components/HelloWorld/HelloWorld.vue");

Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [{
		path: '/',
		name: 'Home',
		component: () => import("@/pages/Home.vue")
	},{
		path: '/HelloWorld',
		name: 'HelloWorld',
		component: () => import("@/components/HelloWorld/HelloWorld.vue")
	},{
		path: '/HelloButton',
		name: 'HelloButton',
		component: () => import("@/components/HelloButton/HelloButton.vue")
	}]
})