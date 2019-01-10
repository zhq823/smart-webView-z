<template>
	<section>
		<div style="border: 1px solid red;">
			<template v-for="(item1, index1) in imgList">
				<viewer :images="imgList">
					<img v-if="index1 == 0" v-for="(item2, index2) in imgList" class="img" :src="item2.url" :key="item2.url" alt="" />
				</viewer>
			</template>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[{
					url: "https://smartecloud.oss-cn-hangzhou.aliyuncs.com/b2e3a6d9-85fc-4893-ba1c-b6c1b502cdc7",
					name:'图片1'
				},{
					url: "https://smartecloud.oss-cn-hangzhou.aliyuncs.com/0befa942-6a9d-4808-a855-6022c231b768",
					name:'图片2'
				}],
				platform:1
			}
		},
		created() {
			window.document.documentElement.setAttribute("data-platform", "app");
			switch(this.platform){
				case '1':
					window.document.documentElement.setAttribute("data-platform", "app");
					break;
				case '9':
					window.document.documentElement.setAttribute("data-platform", "web");
					break;
			}
		},
		methods: {

		}
	}
</script>

<style scoped="scoped">
	.img{
		width: 0.44rem;
		height: 0.44rem;
		/*[data-platform="app"] & {*/
	        border: 1px solid red;
	        margin-right: 0.1rem;
	    /*}*/
	}
</style>