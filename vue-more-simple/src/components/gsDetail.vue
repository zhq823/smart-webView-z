<template>
	<section>
		<mt-header title="GS详情页" class="header_position">
			<mt-button slot="left" icon="back" @click.native="gsDetailGoBack()"></mt-button>
		</mt-header>
	</section>
</template>

<script>
	import { MessageBox, Toast } from "mint-ui";
	export default{
		data(){
			return{
				
			}
		},
		created(){
			this.setRouteListeners('gsDetailGoBack');
			this.$root.$eventHub.$on("gsDetailGoBack", (data)=>{
				this.gsDetailGoBack()
			})
		},
		methods:{
			gsDetailGoBack(){
				this.removeRouteListeners('gsDetailGoBack')
				Toast('GS详情返回')
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	
</style>