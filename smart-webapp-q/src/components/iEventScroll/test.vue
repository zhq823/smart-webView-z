<template>
	<section>
		<header class="header">
			我是头部导航，height=40px
		</header>
		<ievent-scroll :dataList='dataList' :loadData="loadData" :pageIndex='pageIndex' :pageSize='pageSize' :allLoaded="allLoaded" :topHeight='topHeight' :bottomHeight='bottomHeight'>
			<div slot="content">
				<template v-for="(item,index) in dataList">
					<li class="content_item">
						<div>{{item}}</div>
					</li>
				</template>
			</div>
		</ievent-scroll>
		<footer class="footer">
			我是底部导航，height=40px
		</footer>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [],
				pageIndex: 1,
				pageSize: 1,
				allLoaded: false,
				topHeight: 0,
				bottomHeight: 0
			}
		},
		mounted(){
			this.topHeight = document.getElementsByClassName("header")[0].offsetHeight;
			this.bottomHeight = document.getElementsByClassName("footer")[0].offsetHeight;
		},
		created() {
			this.loadData()
		},
		methods: {
			loadData(pageIndex) {
				this.pageIndex = pageIndex || this.pageIndex; //更新自iEventScroll组件
				this.dataList = [];
				if(pageIndex == 1){
					this.pageSize = 1
				}
				this.pageSize += 5;
				for(var i = 0; i < this.pageSize; i++) {
					this.dataList.push(i)
				}
//				this.isFullscreen();
			},
			//判断是否充满屏幕
			isFullscreen() {
				this.$nextTick(() => {
					let _contentItem = document.getElementsByClassName('content_item');
					let _loadMore = document.getElementsByClassName('loadmore_container')[0].offsetHeight;
					if(_contentItem && _contentItem.length > 0 && !this.allLoaded) {
						let _contentItemHeight = 0;
						for(var i = 0; i < _contentItem.length; i++) {
							_contentItemHeight += _contentItem[i].offsetHeight
						}
						if(_loadMore > _contentItemHeight) {
							this.pageIndex++;
							this.loadData();
						}
					}
				})
			},
		}
	}
</script>

<style scoped="scoped">
	.header{
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		background-color: var(--basecolor);
	}

	.footer{
		position: fixed;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		background-color: var(--basecolor);
	}

	.content_item{
		width: 100%;
		background-color: white;
		margin: 10px auto;
		margin-bottom: 0px;
	}
</style>
