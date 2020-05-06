<template>
	<section class="echartBox">
		<car></car>
		<supplier></supplier>
	</section>
</template>

<script>
	import car from './car.vue';
	import supplier from './supplier.vue';
	export default {
		components: {
			car,
			supplier
		},
		data() {
			return {
				
			}
		},
		mounted() {
			
		},
		methods: {
			
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.echartBox {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		/*border: 1px solid red;*/
	}
</style>