<template>
	<section class="container">
		<transition name="popup">
			<div v-if="isShow" class="popup_container">
				<div class="ievent_popup_btn btn_top">
					<slot name="title"></slot>
				</div>
				<div class="ievent_content">
					<slot name="content"></slot>
				</div>
				<div class="ievent_popup_btn btn_bottom">
					<div class="cancle_btn handle_btn">
						<slot name="cancle"></slot>
					</div>
					<div class="confirm_btn handle_btn">
						<slot name="confirm"></slot>
					</div>
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
	.popup_container {
		width: 76%;
		height: auto;
		min-height: 1.54rem;
		border-radius: 0.07rem;
		z-index: 25000;
		position: fixed;
		top: 35%;
		left: 12%;
		box-sizing: content-box;
		background-color: white;
	}

	.shade {
		position: fixed;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		background-color: black;
		z-index: 24500;
		-moz-opacity: 0.5;
		opacity: 0.50;
		filter: alpha(opacity=70);
	}

	.ievent_popup_btn {
		height: .44rem;
		width: 100%;
		line-height: .44rem;
		text-align: center;
	}

	.ievent_content {
		box-sizing: border-box;
		white-space:normal;
		word-break:break-all;
		min-height: 1.6rem;
		height: auto;
		width: 100%;
		color: #333333;
		font-size: .14rem;
		color: #666666;
		font-size: .14rem !important;
		padding-bottom: 0.44rem;
	}

	.btn_top{
		border-bottom: 1px solid #EEEEEE;
	}

	.btn_bottom {
		border-top: 1px solid #EEEEEE;
		position: absolute;
		bottom: 0px;
		left: 0px;
	}

	.handle_btn{
		display: inline-block;
		width: 49%;
		height: .44rem;
		line-height: .44rem;
		float: left;
	}

	.cancle_btn {
		border-right: 1px solid #EEEEEE;
		color: #666666;
	}

	.confirm_btn {
		color: #D7290F;
	}
	/*dialog出现的动画*/

	.popup-enter-active {
		animation: popup-show 0.4s;
	}

	.popup-leave-active {
		animation: popup-hide 0.3s;
	}

	@keyframes popup-show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes popup-hide {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
<style>
	.mint-cell-wrapper{
		border: none !important;
	}
</style>
