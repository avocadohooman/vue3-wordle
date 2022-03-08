<template>
  <div class="simple-keyboard"></div>
</template>

<script lang="ts">
	import Keyboard from "simple-keyboard";
	import "simple-keyboard/build/css/index.css";
	import { ref, onMounted, defineComponent } from "vue";


	export default defineComponent({
		props: [],
		emits: ['onKeyPress'],
		setup(_props, ctx) {
			const keyboard = ref();
			
			const onKeyPress = (button: string) => {
				ctx.emit("onKeyPress", button);
			};

			onMounted(() => {
				keyboard.value = new Keyboard("simple-keyboard", {
					layout: {
					default: [
						"q w e r t y u i o p",
						"a s d f g h j k l",
						"{enter} z x c v b n m {bksp}",
					],
					},
					onKeyPress: onKeyPress,
				});
			});
		}
	})
</script>

<style>

</style>