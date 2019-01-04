<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App',
		mounted(){
			this.$iStorage.set('_screen_height', document.documentElement.clientHeight || window.innerHeight);
			//根据租户更换皮肤颜色
			console.log(this.$iStorage.get('tenant_code'))
			switch(this.$iStorage.get('tenant_code')){
				case 'lilly':
					require('@/assets/css/theme-lilly.css'); //礼来红
					break;
				case 'roche':
					require('@/assets/css/theme-roche.css'); //罗氏蓝
					break;
				default:
					require('@/assets/css/theme-roche.css'); //默认是罗氏蓝
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		font-size: 0.14rem;
		margin: 0px;
		padding: 0px;
		height: 100%;
	}
	html,body {
		margin: 0px;
		padding: 0px;
		height: 100%;
	}
</style>