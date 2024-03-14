<script lang="ts">
	import { createElementDimension } from "@hooks/SvelteElementDimension.svelte";

	const { refTargetElement, dimension } = createElementDimension();
</script>

<div class="mb-2">
	<div
		class="flex flex-col gap-4 p-4 border border-zinc-700 rounded-md bg-zinc-900"
	>
		<div class="flex flex-row gap-2 justify-center">
			<div
				class="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm"
			>
				inline: {$dimension.inline}px
			</div>
			<div
				class="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm"
			>
				block: {$dimension.block}px
			</div>
		</div>
		<div
			use:refTargetElement
			class="target-demo flex flex-row justify-center items-center p-4 border border-zinc-700 rounded-md bg-zinc-900"
		>
			<div
				class="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm"
			>
				aspect-ratio: 2/1
			</div>
		</div>
		<div class="text-center text-sm">Resize the Browser</div>
	</div>
</div>

<style>
	.target-demo {
		aspect-ratio: 2/1;
	}
</style>
