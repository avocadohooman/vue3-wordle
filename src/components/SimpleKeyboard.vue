<template>
  <div class="simple-keyboard"></div>
</template>

<script lang="ts">
	import Keyboard from "simple-keyboard";
	import "simple-keyboard/build/css/index.css";
	import { ref, onMounted, defineComponent, watch } from "vue";


	export default defineComponent({
		props: {
			guessedLetters: {
				type: Object,
				required: true,
			}
		},
		emits: ['onKeyPress'],
		setup(props, ctx) {
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

			watch(
				() => props.guessedLetters,
				(guessedLetters, _prevGuessedLetters) => {
					keyboard.value.addButtonTheme(
						guessedLetters.miss.join(" "),
						"miss",
					);
					keyboard.value.addButtonTheme(
						guessedLetters.found.join(" "),
						"found",
					);
					keyboard.value.addButtonTheme(
						guessedLetters.hint.join(" "),
						"hint",
					);
				},
				{ deep:  true}
			);
		}
	})
</script>

<style>
div.miss {
	@apply bg-gray-500 !important;
	@apply text-white;
}

div.found {
	@apply bg-green-600 !important;
	@apply text-white;
}

div.hint:not(.found) {
	@apply bg-yellow-500 !important;
	@apply text-white;
}
</style>