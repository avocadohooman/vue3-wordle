<template>
	<div class="flex flex-col h-screen max-w-md mx-auto justify-evenly">
		<div>
			<!-- <word-row 
				v-for="(guess, i) in state.guesses"
			/> -->
			<word-row
				v-for="(guess, i) in state.guesses"
				:key="i"
				:value="guess"
				:solution="state.solution"
				:submitted="i < currentGuessIndex"
			/>
		</div>
		<simple-keyboard @onKeyPress="handleInput"/>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import SimpleKeyboard from './components/SimpleKeyboard.vue';
import WordRow from './components/WordRow.vue';
import { Wordle } from './types/WordleTypes';

export default defineComponent({
	components: { SimpleKeyboard, WordRow},
	setup() {
		const handleInput = (key: string) => {
			console.log('key', key);
		}

		const state: Wordle = reactive({
			solution: "books",
			guesses: ["", "", "", "", "", ""],
			currentGuessIndex: 0,
		});

		onMounted(() => {
			window.addEventListener("keyup", (e) => {
				e.preventDefault();
				const key = e.keyCode == 13
								? "{enter}"
								: e.keyCode == 8
								? "{bksp}"
								: String.fromCharCode(e.keyCode).toLowerCase();
				handleInput(key);
			});
		});

		return {
			handleInput,
			state,
		}
	},
})
</script>

<style>

</style>
