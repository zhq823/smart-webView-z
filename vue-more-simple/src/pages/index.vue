<template>
	<section>
		<router-view></router-view>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		created(){
			this.$iStorage.set("routeListeners",[])
			this.$iStorage.set('miceType', '小会');
		}
	}
</script>

<style scoped="scoped">
	
</style>