<template>
	<section class="container">
		<transition name="dialog">
			<div v-if="isShow" class="dialog_container">
				<div v-if="top" class="ievent_dialog_btn btn_top">
					<slot name="top"></slot>
				</div>
				<div v-if="middle" class="ievent_dialog_btn btn_top">
					<slot name="middle"></slot>
				</div>
				<div class="ievent_dialog_btn btn_bottom">
					<slot name="bottom"></slot>
				</div>
			</div>
		</transition>
		<div v-if="isShow" class="shade" @click="close()"></div>
	</section>
</template>

<script>
	export default {
		props: {
			isShow: {
				type: Boolean,
				default: false
			},
			top: {
				type: Boolean,
				default: true
			},
			middle:{
				type: Boolean,
				default: true
			}
		},
		data() {
			return {

			}
		},
		created() {

		},
		methods: {
			//关闭dialog
			close() {
				this.$emit('close', false)
			}
		}
	}
</script>

<style scoped="scoped">
	.dialog_container {
	    width: 50%;
		border-radius: .14rem;
		border: 1px solid #EEEEEE;
		box-sizing: content-box;
		border-radius: 0.04rem;
		z-index: 21000 !important;
		position: fixed;
		top: 35%;
		left: 25%;
		background-color: white;
	}
	
	.shade {
		position: fixed;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		background-color: black;
		z-index: 20000 !important;
		-moz-opacity: 0.5;
		opacity: 0.50;
		filter: alpha(opacity=70);
	}
	
	.ievent_dialog_btn {
		height: .49rem;
		width: 100%;
		line-height: .49rem;
		text-align: center;
		color: #333333;
		font-size: .14rem;
	}
	
	.btn_top {
		border-bottom: 1px solid #EEEEEE;
	}
	
	.btn_bottom {}
	/*dialog出现的动画*/
	
	.dialog-enter-active {
		animation: dialog-show 0.3s;
	}
	
	.dialog-leave-active {
		animation: dialog-hide 0.2s;
	}
	
	@keyframes dialog-show {
		from {
			/*width: 0;*/
			opacity: 0;
		}
		to {
			/*width: 50%;*/
			opacity: 1;
		}
	}
	
	@keyframes dialog-hide {
		from {
			/*width: 50%;*/
			opacity: 1;
		}
		to {
			/*width: 0;*/
			opacity: 0;
		}
	}
</style>