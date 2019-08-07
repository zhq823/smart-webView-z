<template>
	<section>
		<mt-header title="退单记录" class="header_position">
			<mt-button icon="back" slot="left" @click.native="goBack()">返回</mt-button>
		</mt-header>
		<ievent-scroll :loadData="loadData" :allLoaded="true" :topHeight='topHeight'>
			<div slot="content">
				<div class="content_box">
					<template v-for="(item, index) in dataList">
						<div class="item_box" @click="showDetail(item, index)">
							<div class="return_personal">退单人: {{ item.issueBy }}</div>
							<div class="return_time">退单时间: {{ item.issueDt }}</div>
							<div class="return_reason">退单原因: {{ item.issueContent }}</div>
							<span class="status" :class="{isAnswered: item.isAnswered}">{{ item.isAnswered | getStatusTxt }}</span>
						</div>
					</template>
				</div>
			</div>
		</ievent-scroll>
		<!--<smart-upload :bucketAlias="'SmartEvent'" 
                :maxUpload='100'
                :mappingData="uploaderSettings.mappingData" 
                :filterData="uploaderSettings.filterData" 
                :autoMapping="true"
                :readOnly="uploaderSettings.readOnly">
                <div class='uploadTitle'>
                    <p>上传补充文件</p><i class="icon_carema item_right"></i>
                </div>
            </smart-upload>-->
	</section>
</template>

<script>
//	import { smartUpload } from "@/shared/upload";
	export default {
		data() {
			return {
				uploaderSettings:{
                    readOnly: false,
                    mappingData:{
                        processId: this.iStorage.get("proposalId"),
                        relatedId: '',
                        relatedType: "sscFile",
                        catalog: "合规补充文件"
                    },
                    filterData:{
                        processId: this.iStorage.get("proposalId"),
                        relatedId: '',
                        catalog: "合规补充文件"
                    }
                },
				topHeight: 0,
				dataList: []
			}
		},
		filters: {
			getStatusTxt(val) {
				return val ? '已提交' : '待提交';
			}
		},
		mounted() {
			this.topHeight = document.getElementsByClassName('mint-header')[0].offsetHeight;
		},
		created() {
			this.loadData();
		},
		methods: {
			async loadData() {
				this.dataList = [{
						"id": "042ae0bd-69fd-47a3-ae55-04581989ea7f",
						"miceId": "ab0065f8-15b7-463c-b4ce-d47080cc1011",
						"batchId": "d88b807a-afcb-4511-ab5a-fa51ebd0d4c0",
						"issueContent": "A-3 请联系A1系统将会议组织者更改为实际组织人，谢谢。如果对操作有疑问可联系A1客服电话：400-646-1607 罗氏专属客户代码648获得帮助。",
						"issueType": 1,
						"issueDt": "2019-01-10T15:51:28",
						"issueBy": "WUX37",
						"issueUserId": "7295e0c0-8135-11e8-baa6-0242ac120604",
						"isAnswered": false,
						"answerContent": null,
						"answerDt": null,
						"answerBy": null,
						"answerUserId": null,
						"createdOn": "2019-01-10T15:51:28",
						"isDeleted": false
					},
					{
						"id": "c705ee52-914c-4a84-bbe2-48b89a2675d0",
						"miceId": "ab0065f8-15b7-463c-b4ce-d47080cc1011",
						"batchId": "c913c267-e2c8-4a4a-8818-74a69ec0f356",
						"issueContent": "A-3 : 政策 第5.1.6 条 关于销售,仅限地区经理和以上级别才能发起低于等于50,000 元(含讲课费及展台搭建费)的院内会/城市会,以及聘用讲者和发起讲课费的付款。",
						"issueType": 1,
						"issueDt": "2018-12-03T13:48:35",
						"issueBy": "WUX37",
						"issueUserId": "7295e0c0-8135-11e8-baa6-0242ac120604",
						"isAnswered": true,
						"answerContent": "系统默认会议组织者为登录者，申请时没有进一步做修改，实际会议组织者为朱雪松，特此备注说明，且讲课费申请也为地区经理朱雪松，并上传讲课费申请截图供核实，谢谢！",
						"answerDt": "2018-12-07T12:04:02",
						"answerBy": "LIUF31",
						"answerUserId": "72a43ee3-8135-11e8-baa6-0242ac120604",
						"createdOn": "2018-12-03T13:48:35",
						"isDeleted": false
					}
				];
				this.dataList.map((ele) => {
					ele.issueDt = ele.issueDt.replace('T', ' ')
				})
			},
			goBack() {
				this.$router.push({
					path: '/EventDetail'
				})
			},
			//查看详情
			showDetail(item, index) {
				this.$router.push({
					path: '/ReturnRecordDetail',
					query: {
						item: item
					}
				})
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.content_box {
		width: 95%;
		margin: 0.1rem auto;
		margin-bottom: 0px;
		box-sizing: border-box;
		.item_box {
			width: 100%;
			margin: 0.1rem auto;
			margin-bottom: 0px;
			box-sizing: border-box;
			padding: 0.1rem;
			background-color: white;
			position: relative;
			box-shadow: 1px 1px 0.1rem #CCCCCC;
			width: 100%;
			position: relative;
			overflow: hidden;
			.return_personal {
				width: 100%;
				height: 0.22rem;
				line-height: 0.22rem;
			}
			.return_time {
				width: 100%;
				height: 0.22rem;
				line-height: 0.22rem;
			}
			.return_reason {
				width: 100%;
				height: 0.22rem;
				line-height: 0.22rem;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.status {
				box-sizing: content-box;
				padding: 0.03rem 0.14rem;
				background-color: #2D82F0;
				position: absolute;
				top: 0px;
				right: 0px;
				color: white;
			}
			.isAnswered {
				background-color: #CCCCCC;
			}
		}
	}
</style>