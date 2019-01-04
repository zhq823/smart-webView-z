<template>
	<section>
		<mt-header title="详情页2" class="header_position">
			<mt-button slot="left" icon="back" @click.native="detail2GoBack()"></mt-button>
		</mt-header>
		<div class="next" @click="next()">下一页</div>
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
			this.setRouteListeners('detail2GoBack');
			this.$root.$eventHub.$on("detail2GoBack", (data)=>{
				this.detail2GoBack()
			})
			setTimeout(()=>{
//				this.nativeBackJsBridge()
			},3000)
		},
		methods:{
			detail2GoBack(){
				this.removeRouteListeners('detail2GoBack')
				Toast('详情页2返回')
				this.$router.push({
					path: '/detail1'
				})
			},
			next(){
				this.$router.push({
					path: '/detail3'
				})
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.next {
		width: 100%;
		height: 0.44rem;
		text-align: center;
		background-color: #D7290F;
		color: white;
		line-height: 0.44rem;
		margin-top: 2rem;
	}
</style>