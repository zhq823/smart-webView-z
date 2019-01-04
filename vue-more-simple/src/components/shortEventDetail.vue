<template>
	<section>
		<!--<mt-header title="小会详情页2" class="header_position">
			<mt-button slot="left" icon="back" @click.native="shortEventGoBack()"></mt-button>
			<mt-button slot="right" @click.native="next()">test</mt-button>
		</mt-header>-->
		<div class="tab" ref="tab">
			<div class="tab_content" ref="tabContent">
				<div class="tab_item" v-for="(item, index) in tabList" ref="tabItem">{{ item }}</div>
			</div>
		</div>
		<div class="box" ref="wrapper" :style="{'height': wrapperHeight + 'px'}">
			<div class="content">
				<template v-for="(item, index) in tabList">
					<p class="item">{{ item }}</p>
				</template>
			</div>
		</div>
	</section>
</template>

<script>
	import BScroll from 'better-scroll';
	import { MessageBox, Toast } from "mint-ui";
	export default {
		data() {
			return {
				wrapperHeight: 0,
				tabList: ['北京', '上海', '苏州', '安庆', '合肥', '芜湖', '马鞍山', '池州', '黄山', '宣城', '铜陵', '昆山', '无锡', '常州', '连云港', '常熟', '湖州', '杭州', '长沙', '重庆'],
				pullDownRefresh: {
					threshold: 90,
                	stop: 40
				},
				pullUpLoad: {
					threshold: 90,
					bottom: 40
				}
			}
		},
		mounted() {
			this.wrapperHeight = this.$iStorage.get('_screen_height') - 51;
		},
		created() {
			this.setRouteListeners('shortEventGoBack');
			this.$root.$eventHub.$on("shortEventGoBack", (data) => {
				this.shortEventGoBack()
			})
			this.$nextTick(() => {
				this.initTabScroll();
				this.initContentScroll();
			})
		},
		methods: {
			//初始化scroll
			initTabScroll() {
				let width = this.tabList.length * 44;
				this.$refs.tabContent.style.width = width + 'px';
				this.$nextTick(() => {
					if(!this.tabScroll) {
						this.tabScroll = new BScroll(this.$refs.tab, {
							startX: 0,
							click: true,
							scrollX: true,
							scrollY: false,
							eventPassthrough: 'vertical'
						})
					} else {
						this.tabScroll.refresh();
					}
				})
			},
			initContentScroll() {
				this.$nextTick(() => {
					if(!this.contentScroll) {
						this.contentScroll = new BScroll(this.$refs.wrapper, {
							startY: 0,
							click: true,
							scrollX: false,
							scrollY: true,
//							pullDownRefresh: this.pullDownRefresh,
							pullUpLoad: this.pullUpLoad
						})
					} else {
						this.contentScroll.refresh();
					}
				})
			},
			shortEventGoBack() {
				this.removeRouteListeners('shortEventGoBack')
				Toast('小会详情返回')
				this.$router.push({
					path: '/detail1'
				})
			},
			next() {
				this.$router.push({
					path: '/test'
				})
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.tab {
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		height: 0.44rem;
		background-color: #0099FF;
		color: white;
	}
	
	.tab_content {
		text-align: center;
		height: 0.44rem;
	}
	
	.tab_item {
		display: inline-block;
		height: 0.44rem;
		line-height: 0.44rem;
		margin-right: 0.1rem;
	}
	
	.box {
		border: 1px solid red;
		overflow: hidden;
		.item {
			background-color: #eeeeee;
			height: 0.4rem;
			line-height: 0.4rem;
			box-sizing: border-box;
			padding: 0.1rem;
		}
	}
</style>