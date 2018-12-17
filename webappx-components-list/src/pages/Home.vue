<template>
	<section>
		<hello-world @click.native="next('/HelloWorld')">HelloWorld</hello-world><br />
		<hello-button @click.native="next('/HelloButton')">HelloButton</hello-button>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			next(url){
				this.$router.push({
					path:url
				})
			}
		}
	}
</script>

<style scoped="scoped">
	
</style>