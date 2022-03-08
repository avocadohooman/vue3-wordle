<template>
	<div class="flex flex-col h-screen max-w-md mx-auto justify-evenly">
		<simple-keyboard @onKeyPress="handleInput"/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SimpleKeyboard from './components/SimpleKeyboard.vue';

export default defineComponent({
	components: { SimpleKeyboard, },
	setup() {
		const handleInput = (key: string) => {
			console.log('key', key);
		}

		return {
			handleInput,
		}
	},
})
</script>

<style>

</style>
