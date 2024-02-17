<script lang="ts">
	import { stateGlobal } from "@states/global.svelte";
</script>

<h2 class="font-medium text-xl text-center text-pretty">
	Hooks for
	<span
		class="bg-gradient-to-b from-cyan-100 to-cyan-400 inline-block text-transparent bg-clip-text"
		role="none"
		onmouseenter={() => {
			stateGlobal.framework = "REACT";
		}}
		ontouchstart={() => {
			stateGlobal.framework = "REACT";
		}}
	>
		React
	</span>
	and
	<span
		class="bg-gradient-to-b from-orange-100 to-orange-400 inline-block text-transparent bg-clip-text"
		role="none"
		onmouseenter={() => {
			stateGlobal.framework = "SVELTE";
		}}
		ontouchstart={() => {
			stateGlobal.framework = "SVELTE";
		}}
	>
		Svelte
	</span>, Just
	<span
		class="bg-gradient-to-b from-indigo-100 to-indigo-400 inline-block text-transparent bg-clip-text"
	>
		Copy
	</span>
	and
	<span
		class="bg-gradient-to-b from-fuchsia-100 to-fuchsia-400 inline-block text-transparent bg-clip-text"
	>
		Paste
	</span>
</h2>
