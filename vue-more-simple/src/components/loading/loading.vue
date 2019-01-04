<template>
	<section>
		<div class="item" @click="submit()">子传父</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		created(){
			
		},
		methods:{
			submit(){
				this.$emit('postMessage',123)
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.item{
		width: 100%;
		height: 0.44rem;
		line-height: 0.44rem;
		text-align: center;
		background-color: red;
		color: white;
		font-size: 0.16rem;
		font-weight: 600;
		margin-top: 0.1rem;
	}
</style>