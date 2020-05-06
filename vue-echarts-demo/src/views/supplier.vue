<template>
	<section class="supplierBox">
		<div id="supplierWrapper"></div>
	</section>
</template>

<script>
	import echarts from 'echarts';
	import supplier from '@/assets/mock/supplier.json';
	export default {
		data() {
			return {
				supplier
			}
		},
		mounted() {
			this.initEChartView();
		},
		methods: {
			initEChartView() {
				var myChart = echarts.init(document.getElementById('supplierWrapper'));
				myChart.setOption({
					title: {
						text: '供应商服务分析'
					},
					// 头部控制显示隐藏当前状图
					legend: {
						data: ['结算金额', '服务公里数', '服务次数', '单公里价格', '均单价']
					},
				})
				myChart.showLoading();
				setTimeout(() => {
					myChart.hideLoading();
					const options = {
						// 主题
						title: {
							text: '供应商服务分析'
						},
						// 头部控制显示隐藏当前状图
						legend: {
							data: ['结算金额', '服务公里数', '服务次数', '单公里价格', '均单价']
						},
						// 显示下载保存为图片
						toolbox: {
							feature: {
								saveAsImage: {}
							}
						},
						// 显示对齐的轴线
						tooltip: {
							trigger: 'axis'
						},
						dataset: {
							source: [
								['product'].concat(supplier.map(ele => ele.name)), ['结算金额'].concat(supplier.map(ele => ele.amount)), ['服务公里数'].concat(supplier.map(ele => ele.kilo)), ['服务次数'].concat(supplier.map(ele => ele.qty)), ['单公里价格'].concat(supplier.map(ele => ele.kPrice)), ['均单价'].concat(supplier.map(ele => ele.price))
							]
						},
						// x轴线
						xAxis: [{
								type: 'category',
								gridIndex: 0
							},
							{
								type: 'category',
								gridIndex: 1
							}
						],
						// y轴线, 数组中每个对象代表一个Y轴，gridIndex将当前Y轴分配到第几个坐标系，
						// 当前效果是：共4个Y轴，前2个分配到第一个坐标系，后2个分配到第二个坐标系
						yAxis: [{
							gridIndex: 0,
							type: 'value',
							name: '结算金额/服务公里数',
						}, {
							gridIndex: 0,
							type: 'value',
							name: '服务次数',
						}, {
							gridIndex: 1,
							type: 'value',
							name: '单公里价格'
						}, {
							gridIndex: 1,
							type: 'value',
							name: '均单价'
						}],
						grid: [{
								bottom: '55%'
							},
							{
								top: '55%'
							}
						],
						// 貌似只对折线有效果
						color: ['#9BBB59', '#F79646', '#D99694'],
						// 状图数据配置项
						// 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
						series: [{
								type: 'bar',
								yAxisIndex: 0,
								seriesLayoutBy: 'row',
								label: {
									show: true, // 是否列标签数据
									// formatter: '我是自定义标签文字' // 自定义列标签的文字。
								},
								itemStyle: {
									width: 10,
									color: '#31859C' // 状图颜色
								}
							},
							{
								type: 'line',
								yAxisIndex: 0,
								seriesLayoutBy: 'row',
								label: {
									show: true, // 是否列标签数据
									color: '#9BBB59',
									// formatter: '我是自定义标签文字' // 自定义列标签的文字。
								},
								lineStyle: {
									color: '#9BBB59' // 折线样式
								}
							},
							{
								type: 'line',
								yAxisIndex: 1,
								seriesLayoutBy: 'row',
								label: {
									show: true, // 是否列标签数据
									color: '#F79646',
									// formatter: '我是自定义标签文字' // 自定义列标签的文字。
								},
								lineStyle: {
									color: '#F79646' // 折线样式
								}
							},
							// 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
							{
								type: 'bar',
								xAxisIndex: 1,
								yAxisIndex: 2,
								seriesLayoutBy: 'row',
								label: {
									show: true, // 是否列标签数据
									// formatter: '我是自定义标签文字' // 自定义列标签的文字。
								},
								itemStyle: {
									color: '#31859C' // 状图颜色
								}
							},
							{
								type: 'line',
								xAxisIndex: 1,
								yAxisIndex: 3,
								seriesLayoutBy: 'row',
								label: {
									show: true, // 是否列标签数据
									color: '#D99694'
									// formatter: '我是自定义标签文字' // 自定义列标签的文字。
								},
								lineStyle: {
									color: '#D99694' // 折线样式
								}
							}
						]
					}
					myChart.setOption(options)
				}, 1000)
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.supplierBox {
		width: 50%;
		/*border: 1px solid orange;*/
		#supplierWrapper {
			width: 100%;
			height: 400px;
		}
	}
</style>