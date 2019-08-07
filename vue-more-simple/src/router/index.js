import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		name:'index',
		component: () => import('@/pages/index'),
		redirect: '/detail1',
		children: [{
			path:'/eventFlow',
			name: 'eventFlow',
			component: ()=> import('@/pages/event/eventFlow')
		},{
			path:'/detail1',
			name: 'detail1',
			component: ()=> import('@/pages/detail1')
		},{
			path:'/detail2',
			name: 'detail2',
			component: ()=> import('@/pages/detail2')
		},{
			path:'/detail3',
			name: 'detail3',
			component: ()=> import('@/pages/detail3')
		},{
			path:'/test',
			name: 'test',
			component: ()=> import('@/components/iEventScroll/test')
		},{
			path:'/scrollTest',
			name: 'scrollTest',
			component: ()=> import('@/pages/scrollTest')
		},{
			path:'/viewer2',
			name: 'viewer2',
			component: ()=> import('@/pages/viewer2')
		},{
			path:'/dragCell',
			name: 'dragCell',
			component: ()=> import('@/pages/dragCell/dragCell')
		},{
			path:'/ReturnRecord',
			name: 'ReturnRecord',
			component: ()=> import('@/pages/ReturnRecord')
		}]
	}]
})