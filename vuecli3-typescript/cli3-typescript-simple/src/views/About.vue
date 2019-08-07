<template>
	<div class="about">
		<h1 @click="show">This is an about page</h1>
		<hello-world :msg="msg"></hello-world>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import HelloWorld from "@/components/HelloWorld.vue";

	@Component({
		components: {
			HelloWorld
		}
	})
	export default class About extends Vue {
		msg: string = "vue+typescript尝试";
		show(): void {
			console.log(this)
			console.log(this.msg)
		}
	}
</script>