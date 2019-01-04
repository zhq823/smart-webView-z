<template>
	<section>
		<ievent-field label="类型" @click.native="select('val1')" :data="val1"></ievent-field>
		<ievent-field label="类型" style="border-bottom: 1px solid #EEEEEE;" @click.native="select('val2')" :data="val2"></ievent-field>
		<lilly-popup ref="lillyPopup" v-model="isShowPopup" :dataList="dataList" :value="value" @cancelPopup="cancelPopup" @confirmPopup="confirmPopup"></lilly-popup>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				dataList: ['面朝大海', '春暖花开'],
				value: [],
				val1: null,
				val2: null,
				currentKey: null,
				isShowPopup: false
			}
		},
		created() {

		},
		methods:{
			select(key) {
				this.currentKey = key;
				this.isShowPopup = true;
			},
			cancelPopup(val){
				this.$data[this.currentKey] = null;
			},
			confirmPopup(val){
				this.$data[this.currentKey] = val[0];
			}
		}
	}
</script>

<style scoped="scoped">
</style>