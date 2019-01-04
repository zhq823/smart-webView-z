<template>
	<section>
		<mt-popup v-model="isShowPopup" position="right" class="popup_box">
			<mt-header title="上会服务人员" class="header_position">
				<mt-button icon="back" slot="left" @click.native="detail3GoBack()"></mt-button>
				<mt-button slot="right" @click="save()">保存</mt-button>
			</mt-header>

			<main @click="fixInput($event)" @scroll="loadmoreScroll($event)" class="content" ref="wrapper" :style="{'height': wrapperHeight + 'px'}" style="border: 1px solid red;">
				<div class="tips">需求信息(<span>*为必填</span>)</div>
				<mt-field :state="''" type='number' class="mt_col_top1" label="1111" v-model="numFrom.qtyAttenderInt"><i class="next"></i></mt-field>
				<mt-field :state="''" type='number' class="mt_col_top2" label="2222" v-model="numFrom.qtyAttenderExt"><i class="next"></i></mt-field>
				<mt-field :state="''" type='number' class="mt_col_top3" label="3333" v-model="numFrom.qtyAttenderExt"><i class="next"></i></mt-field>
				<mt-field :state="''" type='number' class="mt_col_top4" label="4444" v-model="numFrom.qtyAttenderExt"><i class="next"></i></mt-field>
				<mt-field :state="''" type='number' class="mt_col_top5" label="5555" v-model="numFrom.qtyAttenderExt"><i class="next"></i></mt-field>
				<mt-field :state="''" type='number' class="mt_col_top6" label="6666" v-model="numFrom.qtyAttenderExt"><i class="next"></i></mt-field>
				<mt-field :state="''" type='number' class="mt_col_top7" label="7778" v-model="numFrom.qtyAttenderExt"><i class="next"></i></mt-field>
				<mt-field :state="''" type='number' class="mt_col_top8" label="8888" v-model="numFrom.qtyAttenderExt"><i class="next"></i></mt-field>
				<mt-field :state="''" type='number' class="mt_col_top9" label="1918" v-model="numFrom.qtyAttenderExt"><i class="next"></i></mt-field>
				<mt-field :state="''" type='number' class="mt_col_top10" label="1919" v-model="numFrom.qtyAttenderExt"><i class="next"></i></mt-field>
				<!--<mt-field :state="''" type='number' class="mt_col_top11" label="1920" v-model="numFrom.qtyAttenderExt"><i class="next"></i></mt-field>
				<mt-field :state="''" type='number' class="mt_col_top12" label="1921" v-model="numFrom.qtyAttenderExt"><i class="next"></i></mt-field>
				<mt-field :state="''" type='number' class="mt_col_top13" label="1922" v-model="numFrom.qtyAttenderExt"><i class="next"></i></mt-field>
				<mt-field :state="''" type='number' class="mt_col_top14" label="1923" v-model="numFrom.qtyAttenderExt"><i class="next"></i></mt-field>
				<mt-field :state="''" type='number' class="mt_col_top15" label="1924" v-model="numFrom.qtyAttenderExt"><i class="next"></i></mt-field>
				<mt-field :state="''" type='number' class="mt_col_top16" label="1925" v-model="numFrom.qtyAttenderExt"><i class="next"></i></mt-field>
				<mt-field :state="''" type='number' class="mt_col_top17" label="1926" v-model="numFrom.qtyAttenderExt"><i class="next"></i></mt-field>
				<mt-field :state="''" type='number' class="mt_col_top18" label="1927" v-model="numFrom.qtyAttenderExt"><i class="next"></i></mt-field>
				<mt-field :state="''" type='number' class="mt_col_top19" label="1928" v-model="numFrom.qtyAttenderExt"><i class="next"></i></mt-field>-->
			</main>
			<footer class="footer">
				<div>提交</div>
			</footer>
		</mt-popup>
	</section>
</template>

<script>
	import { MessageBox, Toast } from "mint-ui";
	export default {
		data() {
			return {
				wrapperHeight: 0,
				isShowPopup: true,
				numFrom: {
					qtyAttenderInt: '', //内部人数
					qtyAttenderExt: '', //外部人数
				},
				_event_scrollTop: 0,
				currentNode: null
			}
		},
		mounted() {
			this.$nextTick(() => {
				let body_h = window.document.documentElement.clientHeight || window.innerHeight;
				let header_h = document.getElementsByClassName('header_position')[0].clientHeight;
				let footer_h = document.getElementsByClassName('footer')[0].clientHeight;
				this.wrapperHeight = body_h - header_h - footer_h;
			})
		},
		created() {
			console.log(this.$fixedInput)
			this.$fixedInput({
				wrapper: "content"
			})
			this.setRouteListeners('detail3GoBack');
			this.$root.$eventHub.$on("detail3GoBack", (data) => {
				this.detail3GoBack()
			})
			setTimeout(() => {
				//				this.nativeBackJsBridge()
			}, 3000)
		},
		methods: {
			//监听滚动
			loadmoreScroll(event) {
				this._event_scrollTop = event.target.scrollTop;
			},
			fixInput(event) {
				//				console.log(document.activeElement)
				//				this.currentNode = event.target;
				//				let _this = this;
				//				let screenHeight = window.document.documentElement.clientHeight || window.innerHeight;
				//				window.addEventListener('resize', function() {
				//					let body_h = window.document.documentElement.clientHeight || window.innerHeight;
				//					let header_h = document.getElementsByClassName('header_position')[0].clientHeight;
				//					if(screenHeight > body_h){
				//						_this.wrapperHeight = body_h - header_h - 20;
				//						_this.$nextTick(()=>{
				//							_this.currentNode.scrollIntoView(true);//置顶
				//						})
				//					}else{
				//						_this.wrapperHeight = body_h - header_h;
				//						document.getElementsByClassName('content')[0].scrollTo(0, _this._event_scrollTop)
				//					}
				//				})
			},
			detail3GoBack() {
				this.removeRouteListeners('detail3GoBack')
				Toast('详情页3返回')
				this.$router.push({
					path: '/detail2'
				})
			},
			next() {
				this.$router.push({
					path: '/detail2'
				})
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.header_position {
		position: fixed;
		top: 0rem;
		left: 0rem;
		width: 100%;
		z-index: 1900;
		height: 0.44rem;
	}
	
	.popup_box {
		width: 100% !important;
		height: 100% !important;
		box-sizing: border-box !important;
		background-color: #F2F2F2 !important;
		.content {
			overflow: scroll;
			-webkit-overflow-scrolling: touch;
			margin-top: 0.44rem;
			margin-bottom: 0.4rem;
			.tips {
				width: 100%;
				box-sizing: border-box;
				height: 0.38rem;
				line-height: 0.38rem;
				padding-left: 0.1rem;
				background-color: white;
				margin-bottom: 0.1rem;
				span {
					color: #D7290F;
				}
			}
		}
	}
	
	footer {
		position: fixed;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 0.44rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		background-color: white;
		border-top: 1px solid #eee;
		div {
			width: 1rem;
			height: 0.44rem;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: red;
			color: white;
		}
	}
</style>