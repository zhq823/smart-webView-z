import Vue from 'vue';
import HelloWorld from './HelloWorld/index';
import HelloButton from './HelloButton/index';

const components = [
	HelloWorld,
	HelloButton
]
components.map((ele) => {
	Vue.use(ele);
})
export default components;