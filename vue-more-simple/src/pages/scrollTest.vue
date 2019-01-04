<template>
	<section>
		<div class="container">
			<header class="header">我是导航菜单</header>
			<scroll class="box" ref="scroll" :data="orderList" :pullDownRefresh="pulldown" :pullUpLoad="pullUpLoad" @pullingDown="onloadData" @pullingUp="onPullingUp">
				<div class="item" v-for="(item,index) in orderList" @click="showDetail(item)">{{ item }}</div>
				<div style="text-align: center;height: 0.24rem;line-height: 0.24rem;" v-if="pageSize == 35">加载完毕</div>
			</scroll>
		</div>
	</section>
</template>

<script>
	import scroll from '@/pages/betterScroll.vue';
	export default {
		components: {
			scroll
		},
		data() {
			return {
				pageIndex: 1,
				pageSize: 5,
				orderList: [1, 2, 3],
				pulldown: {
					threshold: 90,
					stop: 40
				},
				pullUpLoad: {
					threshold: 50
				}
			}
		},
		created() {
			this.loadData();
		},
		methods: {
			loadData(type) {
				this.orderList = [];
				for(var i = 0; i < this.pageSize; i++) {
					this.orderList.push(i)
				}
				if(type == 'up') {
					this.$refs.scroll.forceUpdate()
				}
				if(this.pageSize == 30) {
					this.pullUpLoad = false;
				}
			},
			onloadData() { // 下拉
				this.pageSize = 5;
				this.pullUpLoad = {
					threshold: 20
				}
				setTimeout(() => {
					this.loadData('down');
				}, 1000)
			},
			onPullingUp() { // 上拉
				console.log('上拉')
				this.pageSize += 5;
				setTimeout(() => {
					this.loadData('up');
				}, 1000)
			},
			showDetail(item) {
				console.log(item)
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.container {
		box-sizing: border-box;
		border: 1px solid blue;
		height: 100vh;
		width: 100%;
		.header {
			height: 0.44rem;
			line-height: 0.44rem;
			text-align: center;
			background-color: red;
			color: white;
			box-sizing: border-box;
		}
		.box {
			/*border: 1px solid red;*/
			position: relative;
			height: calc(100vh - 0.44rem);
			width: 100%;
			box-sizing: border-box;
			overflow: hidden;
			background: white;
			.item {
				height: 0.8rem;
				line-height: 0.8rem;
				border-bottom: 1px solid #EEEEEE;
				padding-left: 0.1rem;
			}
		}
	}
</style>