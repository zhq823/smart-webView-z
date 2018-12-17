<template>
	<section>
		<mt-popup v-model="isShowPopup" position="bottom" class="smart_popup_box">
			<div class="popup_handle_row">
				<span class="popup_cancle" @click="close()">清 空</span>
				<span class="popup_title">请选择人员类型</span>
				<span class="popup_confirm" @click="confirm()">确定</span>
				<div v-if="isShowPopup && dataList.length == 0" class="slot_list_null">暂无数据</div>
			</div>
			<picker :data='dataList' :columns="columns" v-model='value'></picker>
		</mt-popup>
	</section>
</template>

<script>
	import { Picker } from 'vux'
	export default {
		components: {
			Picker
		},
		props: {
			//picker选择项
			dataList: {
				type: Array,
				default: ['请选择']
			},
			//选择项列数，当大于1列时，联级效果请参考vux官方文档picker组件说明
			columns: {
				type: Number,
				default: 1
			},
			//picker已经选中的值
			value: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				isShowPopup: false
			}
		},
		created() {
			
		},
		methods: {
			//确定：需要获取什么参数待续...
			confirm() {
				this.$emit('confirmPopup', this.value);
				this.isShowPopup = false;
			},
			//取消：需要获取什么参数待续...
			close() {
				this.$emit('cancelPopup', null);
				this.isShowPopup = false;
			},
			showPopup(){
				this.isShowPopup = true;
			}
		}
	}
</script>

<style scoped="scoped">
	.smart_popup_box{
		width: 100%;
	}
	.popup_handle_row {
		position: relative;
		text-align: center;
		padding-top: .14rem;
		height: .42rem;
	}
	
	.popup_cancle {
		position: absolute;
		top: 0.1rem;
		left: .28rem;
		color: #45AFFF;
		font-size: .14rem;
		display: inline-block;
		width: .56rem;
		height: .28rem;
		line-height: .28rem;
		z-index: auto;
	}
	
	.popup_title {
		color: #666666;
		font-size: .15rem;
	}
	
	.popup_confirm {
		position: absolute;
		top: .1rem;
		right: .28rem;
		color: #45AFFF;
		font-size: .14rem;
		display: inline-block;
		width: .56rem;
		height: .28rem;
		line-height: .28rem;
		z-index: auto;
	}
	
	.slot_list_null {
		position: absolute;
		color: #666666;
		width: 100%;
		height: .56rem;
		line-height: .56rem;
		text-align: center;
	}
</style>