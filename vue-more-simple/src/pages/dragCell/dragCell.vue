<template>
	<section class="container">
		<div ref="wrapper" class="box" @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend($event)">
			<div class="content">这是一个模仿QQ消息列表滑动删除动作的组件，目前满足一个操作按钮，后续可以继续封装，计算好宽度即可使用</div>
			<div class="handle">
				<p class="remove" @click="remove()">删除</p>
			</div>
		</div>
	</section>
</template>

<script>
	//基础功能已实现，可以继续封装成滑动操作组件
	import { MessageBox, Toast } from "mint-ui";
	export default {
		data() {
			return {
				touchBegin_X: null,
				touchEnd_X: null
			}
		},
		created() {

		},
		methods: {
			touchstart(event) {
				this.touchBegin_X = event.touches[0].pageX;
			},
			touchmove(event) {
				this.touchEnd_X = event.touches[0].pageX;
				let drag_X = this.touchEnd_X - this.touchBegin_X;
				let marginLeft = Number(this.$refs.wrapper.style.marginLeft.replace('px', ''));
				//滑倒最右，不继续滑动
				if(marginLeft < -100 || drag_X < -100){
					drag_X = -100;
				}
				//滑倒最左，不继续滑动
				if(marginLeft >= 0 && drag_X > 0){
					drag_X = 0;
				}
				//滑动
				this.$refs.wrapper.style.marginLeft = drag_X + 'px';
			},
			touchend(event) {
				this.touchEnd_X = event.changedTouches[0].pageX;
				let drag_X = this.touchEnd_X - this.touchBegin_X;
				//左滑距离不足50px，恢复原状
				if(drag_X < 0 && drag_X > -50){
					this.$refs.wrapper.style.marginLeft = '0px';
				}
				//左滑距离达到50px，出现按钮
				if(drag_X <= -50){
					this.$refs.wrapper.style.marginLeft = '-100px';
				}
				//右滑
				if(drag_X > 50) {
					this.$refs.wrapper.style.marginLeft = '0px';
				}
			},
			remove(){
				MessageBox.confirm("确定删除?").then(async action => {
					this.$refs.wrapper.style.marginLeft = '0px';
					console.log("删除成功")
				}).catch((error)=>{
					console.log('删除失败')
				})
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.container {
		overflow: hidden;
		.box {
			width: calc(100% + 100px);
			height: 0.6rem;
			margin-left: 0px;
			position: relative;
			transition: all 0.3s ease-out;
			border: 1px solid red;
			.content {
				width: 100vw;
				height: 100%;
				padding: 0.1rem;
				color: white;
				background-color: orange;
			}
			.handle {
				position: absolute;
				top: 0px;
				right: 0px;
				width: 100px;
				height: 100%;
				.remove {
					position: absolute;
					top: 0px;
					right: 0px;
					margin: 0px;
					width: 100%;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					color: white;
					background-color: red
				}
			}
		}
	}
</style>