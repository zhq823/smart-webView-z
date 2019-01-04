import { MessageBox, Toast } from "mint-ui";
import Vue from 'vue';
const nativeJsBridge = {
	data() {
		return {

		}
	},
	created() {
		if(!window.webkit && window.SMGeneral) {
			window.SMGeneral.setBackPressEnable(true);
			window.SMGeneral.setOnBackBressedListener("callBack");
		}
		window['callBack'] = () => {
			this.nativeBackJsBridge();
		}
	},
	methods: {
		nativeBackJsBridge() {
			//			Toast("Android Back")
			let routeListeners = this.$iStorage.get('routeListeners');
			if(routeListeners.length > 0) {
				var key = routeListeners.pop();
				Toast(key)
				this.$root.$eventHub.$emit(key)
//				switch(this.hasOwnProperty(key)) {
//					case true:
//						this[key]();
//						break;
//					case false:
//						Toast(key + 'is undefined');
//						break;
//				}
			};
		},
		//保存当前路由返回事件记录
		setRouteListeners(backMethod) {
			let routeListeners = this.$iStorage.get('routeListeners');
			if(routeListeners.indexOf(backMethod) == -1) {
				routeListeners.push(backMethod);
			}
			this.$iStorage.set('routeListeners', routeListeners);
		},
		//返回上一页删除当前退回记录
		removeRouteListeners(backMethod) {
			let routeListeners = this.$iStorage.get('routeListeners');
			routeListeners = routeListeners.filter((ele) => {
				return ele != backMethod
			});
			this.$iStorage.set('routeListeners', routeListeners);
		}
	}
}
Vue.mixin(nativeJsBridge);
export default nativeJsBridge;
