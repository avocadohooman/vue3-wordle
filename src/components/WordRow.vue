<template>
	<div class="grid max-w-xs grid-cols-5 gap-1 mx-auto mb-1">
		<letter-box 
			v-for="i in 5"
			:key="i"
			:letter="value[i - 1]"
			:colors="colors[i-1]"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
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
		const colors = ref(["", "", "", "", ""]);
		
		watch(() => props.submitted, 
			async (_submitted, _prevSubmitted) => {
				if (props.submitted) {
					const solution = props.solution;
					const value = props.value;

					const temp = ["gray", "gray", "gray", "gray", "gray"];
					let letterPool = [];
					for (let i = 0; i < 5; i++) {
						if (solution.charAt(i) === value.charAt(i)) {
							temp[i] = "green";
						} else {
							letterPool.push(solution.charAt(i));
						}
					}
					for (let i = 0; i < 5; i++) {
						if (temp[i] == "gray") {
							if (letterPool.includes(value.charAt(i))) {
								letterPool.splice(letterPool.indexOf(value.charAt(i)), 1);
								temp[i] = "yellow";
							}
						}
						colors.value[i] = temp[i];
						await new Promise((resolve) => setTimeout(resolve, 500));
					}
				}
			});
		return {
			colors,
		}
	},
})
</script>

