<template>
	<section>
		<el-button type="warning" @click="back()" style="width: 80%;">{{content}}</el-button>
	</section>
</template>

<script>
	export default{
		props:{
			content:{
				type:String,
				default:'HelloButton'
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
				this.$emit('clickHelloBtn');
			}
		}
	}
</script>

<style scoped="scoped">
	
</style>