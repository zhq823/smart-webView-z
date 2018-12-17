<template>
	<section class="container">
		<div class="ievent_nav_bar_left">
			<slot name="left"></slot>
		</div>
		<div class="ievent_nav_bar_right">
			<slot name="right"></slot>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped="scoped">
	.container {
		width: 100%;
		position: relative;
	}
	
	.ievent_nav_bar_left {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 90%;
		height: .42rem;
		line-height: .42rem;
		background-color: white;
		overflow: hidden;
	}
	
	.ievent_nav_bar_right {
		position: absolute;
		top: 0px;
		right: 0px;
		width: 10%;
		height: .42rem;
		line-height: .42rem;
		background-color: lightgray;
	}
</style>