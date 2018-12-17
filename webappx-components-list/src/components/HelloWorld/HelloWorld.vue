<template>
	<section>
		<el-button type="success" @click="back()" style="width: 80%;">HelloWorld</el-button>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">

</style>