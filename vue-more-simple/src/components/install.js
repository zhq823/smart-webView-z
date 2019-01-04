import loading from './loading/index';
import iEventScroll from './iEventScroll/index';
import Vue from 'vue'

const components = [
	loading,
	iEventScroll
];

components.map((ele)=>{
	Vue.use(ele)
})

