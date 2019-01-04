<template>
	<section>
		<component v-bind:is="componentName"></component>
	</section>
</template>

<script>
	import { MessageBox, Toast } from "mint-ui";
	import gsDetail from '@/components/gsDetail.vue';
	import shortEventDetail from '@/components/shortEventDetail.vue';
	export default {
		components: {
			gsDetail,
			shortEventDetail
		},
		data() {
			return {
				componentName: ''
			}
		},
		created() {
//			this.setRouteListeners('eventFlowGoBack')
			switch(this.$iStorage.get("miceType")){
				case '产品介绍会':
					this.componentName = 'gsDetail';
					break;
				case '小会':
					this.componentName = 'shortEventDetail';
					break;
			}
//			this.$root.$eventHub.$on("eventFlowGoBack", (data)=>{
//				this.eventFlowGoBack()
//			})
			setTimeout(()=>{
//				this.nativeBackJsBridge()
			},3000)
		},
		methods:{
			eventFlowGoBack(){
//				this.removeRouteListeners('eventFlowGoBack')
				Toast('详情返回')
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.header_position {
		width: 100%;
		height: 0.44rem;
		border: 1px solid red;
		background-color: #D7290F;
	}
</style>