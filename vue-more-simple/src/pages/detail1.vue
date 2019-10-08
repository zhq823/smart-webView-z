<template>
	<section>
		<mt-header title="详情页1" class="header_position">
			<mt-button slot="left" icon="back" @click.native="detail1GoBack()"></mt-button>
		</mt-header>
		<mt-radio class="mtRadio" v-model="hasDrinksTxt" :options="options"></mt-radio>
		<div class="next" @click="next()">下一页</div>
		<loading @postMessage="postMessage"></loading>
	</section>
</template>

<script>
	import { MessageBox, Toast } from "mint-ui";
	export default {
		data() {
			return {
				hasDrinksTxt: "是",
				options: ["是", "否"]
			}
		},
		created() {
//			navigator.vibrate = navigator.vibrate
//             || navigator.webkitVibrate
//             || navigator.mozVibrate
//             || navigator.msVibrate;
//          navigator.vibrate([500, 300, 400,300])
			if("vibrate" in navigator) {
				window.navigator.vibrate(20);
			}
//			window.navigator.vibrate(200);
			this.setRouteListeners('detail1GoBack');
			this.$root.$eventHub.$on("detail1GoBack", (data) => {
				this.detail1GoBack()
			})
			setTimeout(() => {
				//				this.nativeBackJsBridge()
			}, 3000)
		},
		methods: {
			detail1GoBack() {
				this.removeRouteListeners('detail1GoBack')
				Toast('详情页1返回');
				this.$router.push({
					path: '/eventFlow'
				})
			},
			next(){
				this.$router.push({
					path: '/detail2'
				})
			},
			postMessage(val){
				console.log(val)
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.next {
		width: 100%;
		height: 0.44rem;
		text-align: center;
		background-color: var(--basecolor);
		color: white;
		line-height: 0.44rem;
		margin-top: 2rem;
	}
</style>

<style>
	.mtRadio {}
	
	.mtRadio .mint-cell {
		display: inline-block;
		width: 50%;
		border: none;
		background-attachment: fixed !important;
	}
	
	.mtRadio .mint-radiolist-title {
		display: none;
	}
	
	.mtRadio .mint-radio-label {
		font-size: 0.14rem !important;
	}
	.mint-radio-input:checked + .mint-radio-core {
		border-color: #D7290F;
		background-color: #D7290F;
	}
</style>