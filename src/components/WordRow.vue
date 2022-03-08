<template>
	<div class="grid max-w-xs grid-cols-5 gap-1 mx-auto mb-1">
		<letter-box 
			v-for="i in 5"
			:key="i"
			:letter="value[i - 1]"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LetterBox from './LetterBox.vue';

export default defineComponent({
	components: {LetterBox},
	props: {
		value: {
			type: String,
			required: true,
		},
		solution: {
			type: String,
			required: true,
		},
		submitted: {
			type: Boolean,
			required: true,
		}
	},
	setup(props) {
		console.log('props', props);
	},
})
</script>

