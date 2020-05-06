<template>
	<section class="carBox">
		<div id="carWrapper"></div>
	</section>
</template>

<script>
	import echarts from 'echarts';
	import carAmount from '@/assets/mock/carAmount.json';
	import DownloadImg from '@/controllers/downloadImg';
	export default {
		data() {
			return {
				carAmount
			}
		},
		mounted() {
			this.initEChartView();
		},
		methods: {
			initEChartView() {
				var myChart = echarts.init(document.getElementById('carWrapper'));
				myChart.setOption({
					title: {
						text: '销售用车次数、花费'
					},
					// 头部控制显示隐藏当前状图
					legend: {
						data: ['用车花费', '用车次数']
					},
				})
				myChart.showLoading();
				setTimeout(() => {
					myChart.hideLoading();
					const options = {
						// 主题
						title: {
							text: '销售用车次数、花费'
						},
						// 头部控制显示隐藏当前状图
						legend: {
							data: ['用车花费', '用车次数']
						},
						// 显示下载保存为图片
						toolbox: {
							show: true,
							feature: {
					            dataView: {readOnly: false},
					            restore: {},
					            saveAsImage: {}
					        }
						},
						// 显示对齐的轴线
						tooltip: {
							trigger: 'axis',
							axisPointer: {
					            type: 'cross',
					            label: {
					                backgroundColor: '#283b56'
					            }
					        }
						},
						// x轴线
						xAxis: {
							type: 'category',
							data: this.carAmount.map(ele => ele.name)
						},
						// y轴线
						yAxis: [{
							name: '用车花费',
							type: 'value',
							// data: [] // 可以不写，默认计算
						}, {
							name: '用车次数',
							type: 'value',
							// data: [] // 可以不写，默认计算
						}],
						dataZoom: [{ // 这个dataZoom组件，默认控制x轴。
							type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
//							start: 10, // 左边在 10% 的位置。
//							end: 60, // 右边在 60% 的位置。
							startValue: 0, // 如果设置了 dataZoom-inside.start 则 startValue 失效。
							endValue: 10, // 如果轴的类型为 category，则 startValue 既可以设置为 axis.data 数组的 index，也可以设置为数组值本身。 但是如果设置为数组值本身，会在内部自动转化为数组的 index
						}, {
							type: 'inside'
						}],
						// 状图数据配置项
						series: [{
							name: '用车花费', // y轴title
							type: 'bar', // 状图类型【柱状图】
							yAxisIndex: 0, // 数据挂载的y轴位置，默认左边为0
							label: {
								show: true, // 是否列标签数据
								// formatter: '12' // 自定义列标签的文字。
							},
							itemStyle: {
								color: '#31859C' // 状图颜色
							},
							data: this.carAmount.map(ele => ele.amount) // 数据源
						}, {
							name: '用车次数', // y轴title
							type: 'line', // 状图类型【折线图】
							yAxisIndex: 1, //  数据挂载的y轴位置，右边为1
							label: {
								show: true, // 是否列标签数据
								// formatter: '12' // 自定义列标签的文字。
							},
							lineStyle: {
								color: '#F79646' // 折线样式
							},
							data: this.carAmount.map(ele => ele.qty) // 数据源
						}]
					}
					myChart.setOption(options)
					setTimeout(() => {
						var img = myChart.getDataURL('png')
						console.log(img)
						DownloadImg.install({
							fileName: "销售用车次数、花费.png",
							content: img
						})		
					}, 1000)
				}, 2000)
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.carBox {
		width: 50%;
		/*border: 1px solid red;*/
		#carWrapper {
			width: 100%;
			height: 400px;
		}
	}
</style>