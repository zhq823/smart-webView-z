<template>
	<section>
		<div class="loadmore_container" ref="wrapper" :style="{ height: wrapperHeight + 'px', 'top': topHeight + 'px' }">
			<mt-loadmore :topDistance="40" :bottomDistance="40" :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill='false'>
				<ul class="page-loadmore-list" :style="{ 'min-height': listBoxHeight + 'px' }">
					<slot name="content"></slot>
					<div v-if="dataList.length > 0 && allLoaded" class='no_more_data'>
						<span class="footer_line_left"></span>
						<span class="no_more_data_span">已显示全部数据</span>
						<span class="footer_line_right"></span>
					</div>
				</ul>
				<div slot="top" class="mint-loadmore-top">
					<span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }" class="drop_icon">↓</span>
					<span v-show="topStatus === 'loading'">
						<mt-spinner type="fading-circle" color="#D7290F"></mt-spinner>
			        </span>
				</div>
				<div slot="bottom" class="mint-loadmore-bottom">
					<span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }" class="drop_icon">↑</span>
					<span v-show="bottomStatus === 'loading'">
		            	<mt-spinner type="fading-circle" color="#D7290F"></mt-spinner>
		         	</span>
				</div>
			</mt-loadmore>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			allLoaded: {
				type: Boolean,
				default: false
			},
			topHeight: {
				type: Number,
				default: 0
			},
			bottomHeight: {
				type: Number,
				default: 0
			},
			pageIndex: {
				type: String,
				default: 1
			},
			pageSize: {
				type: String,
				default: 10
			},
			dataList: {
				type: Array,
				default: []
			},
			loadData: {
				type: Function
			}
		},
		data() {
			return {
				wrapperHeight: 0,
				listBoxHeight: 0,
				bottomStatus: '',
				topStatus: '',
			}
		},
		mounted() {

		},
		created() {
			this.$nextTick(()=>{
				let _page_loadmore_list = document.getElementsByClassName('page-loadmore-list')[0].offsetTop;
				//计算滑动区域高度
				this.wrapperHeight = (document.documentElement.clientHeight || window.innerHeight) - this.topHeight - this.bottomHeight;
				//计算滑动区域最小高度
				this.listBoxHeight = this.wrapperHeight - _page_loadmore_list;
				/*备注说明:
				1、 标签[class="page-loadmore-list"]比较特殊，其border-top会紧贴子元素border-top
				 当子元素设置了margin-top或者margin-bottom时<目的是同导航保持一段距离>
				那么这时候就需要将 listBoxHeight = wrapperHeight - firstChild.marginTop - firstChild.marginBottom;
				否则初次加载会出现内容不占满屏幕就出现滚动条，原因就是该标签高度<page-loadmore-list.height>溢出导致
				2、_page_loadmore_list == firstChild.marginTop
				3、请尝试将firstChild.marginBottom == 0px
				 * */
			})
		},
		methods: {
			//上拉
			loadBottom() {
				this.pageIndex++;
				this.loadData(this.pageIndex)
				this.$nextTick(()=>{
					this.$refs.loadmore.onBottomLoaded();
				})
			},
			//下拉
			loadTop() {
				this.pageIndex = 1;
				this.loadData(this.pageIndex)
				this.$nextTick(()=>{
					this.$refs.loadmore.onTopLoaded();
				})
			},
			//下拉状态变化
			handleTopChange(status) {
				this.topStatus = status;
			},
			//上拉状态变化
			handleBottomChange(status) {
				this.bottomStatus = status;
			}
		}
	}
</script>

<style scoped="scoped">
	@import './LoadMore.css';
</style>
