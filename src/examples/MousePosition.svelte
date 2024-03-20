<script lang="ts">
	import { createMousePosition } from "@hooks/SvelteMousePosition.svelte";

	const {
		refTargetElement,
		hover,
		hoverPixelX,
		hoverPixelY,
		hoverPercentX,
		hoverPercentY,
		active,
		activePixelX,
		activePixelY,
		activePercentX,
		activePercentY,
	} = createMousePosition(true);
</script>

<div class="mb-2">
	<div
		class="flex flex-col gap-4 p-4 border border-zinc-700 rounded-md bg-zinc-900"
	>
		<div class="flex flex-col gap-2">
			<div class="flex flex-row gap-2 justify-center">
				<div
					class="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm"
				>
					hover: {$hover}
				</div>
			</div>
			<div class="flex flex-row gap-2 justify-center">
				<div
					class="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm"
				>
					hoverPixelX: {$hoverPixelX.toFixed(0)}px
				</div>
				<div
					class="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm"
				>
					hoverPixelY: {$hoverPixelY.toFixed(0)}px
				</div>
			</div>
			<div class="flex flex-row gap-2 justify-center">
				<div
					class="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm"
				>
					hoverPercentX: {$hoverPercentX.toFixed(0)}%
				</div>
				<div
					class="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm"
				>
					hoverPercentY: {$hoverPercentY.toFixed(0)}%
				</div>
			</div>
			<div class="flex flex-row gap-2 justify-center">
				<div
					class="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm"
				>
					active: {$active}
				</div>
			</div>
			<div class="flex flex-row gap-2 justify-center">
				<div
					class="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm"
				>
					activePixelX: {$activePixelX.toFixed(0)}px
				</div>
				<div
					class="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm"
				>
					activePixelY: {$activePixelY.toFixed(0)}px
				</div>
			</div>
			<div class="flex flex-row gap-2 justify-center">
				<div
					class="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm"
				>
					activePercentX: {$activePercentX.toFixed(0)}%
				</div>
				<div
					class="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm"
				>
					activePercentY: {$activePercentY.toFixed(0)}%
				</div>
			</div>
		</div>
		<div
			use:refTargetElement
			class="target-demo flex flex-col justify-center items-center p-4 border border-zinc-700 rounded-md bg-zinc-900"
		>
			<div
				class="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm"
			>
				target
			</div>
		</div>
		<div
			class="self-center px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm"
		>
			touch-action: none; // to disable scroll on touch screen device
		</div>
	</div>
</div>

<style>
	.target-demo {
		aspect-ratio: 2/1;
		touch-action: none;
	}
</style>
