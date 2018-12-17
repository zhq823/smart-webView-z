<template>
	<section>
		<div class="ievent_field_box">
			<div class="field_label" :class="{field_label_verify:verify}">
				<slot name="field_label"> {{ label }} </slot>
			</div>
			<div class="field_value">
				<slot name="field_value"> {{ data }} </slot>
			</div>
			<i v-if="hasIcon" class="next_small field_icon"></i>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			label: {
				type: String,
				default: ''
			},
			data: {
				type: String,
				default: ''
			},
			verify: {
				type: Boolean,
				default: false
			},
			hasIcon: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {

			}
		},
		created() {

		},
		methods: {

		}
	}
</script>

<style scoped="scoped">
	.ievent_field_box {
		position: relative;
		box-sizing: border-box;
		width: 100%;
		height: 48px;
		line-height: 48px;
		background-color: white;
		border-top: 1px solid #EEEEEE;
		padding: 0px 10px;
	}
	
	.field_label {
		min-width: 30%;
		font-size: 0.15rem;
	}
	
	.field_label_verify:after {
		content: '*';
		color: red;
	}
	
	.field_value {
		position: absolute;
		right: 0.34rem;
		top: 0rem;
		max-width: 67%;
		height: 48px;
		line-height: 48px;
		text-align: right;
		color: #333333;
		font-size: 0.15rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.field_icon {
		position: absolute;
		top: 0.1rem;
		right: 0.1rem;
	}
	
	i {
		width: .2rem;
		height: .2rem;
		display: inline-block;
		background-size: cover;
	}
	
	i.next_small {
		background-image: url('./icon/next_small.svg');
		width: .22rem;
		height: .22rem;
		color: red;
	}
</style>