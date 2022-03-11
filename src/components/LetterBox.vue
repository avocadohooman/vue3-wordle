<template>
	<div class=" col-span-1 flex items-center justify-center h-16 uppercase border-2 border-gray-200 transition-all duration-300" 
		:class="{
			' border-gray-500 bg-gray-500 text-white'
				:colors == 'gray',
			' border-green-500 bg-green-500 text-white'
				:colors == 'green',
			' border-yellow-500 bg-yellow-500 text-white'
				:colors == 'yellow',
		}"
	>
		{{ letter }}
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		letter: {
			type: String,
			required: true,
			default: "",
		},
		colors: {
			type: String,
		}
	},
	setup() {
		 
	},
})
</script>
