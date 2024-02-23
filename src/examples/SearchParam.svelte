<script lang="ts">
	import { createSearchParam } from "@hooks/SvelteSearchParam.svelte";

	const SIZES = ["SMALL", "MEDIUM", "LARGE"] as const;
	const COLORS = ["RED", "GREEN", "BLUE"] as const;

	const [paramSize, setParamSize] = createSearchParam("size", SIZES[0]);
	const [paramColor, setParamColor] = createSearchParam("color", COLORS[0]);
</script>

<div class="mb-2">
	<div
		class="flex flex-col gap-4 p-4 border border-zinc-700 rounded-md bg-zinc-900"
	>
		<div class="flex flex-row items-start gap-4">
			<div class="flex-1 text-end">
				<label for="size-select">Size</label>
			</div>
			<div class="flex-1">
				<select
					id="size-select"
					class="flex justify-center items-center p-2 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-xs cursor-pointer"
					onchange={(event) => {
						setParamSize(event.currentTarget.value);
					}}
					value={$paramSize}
				>
					{#each SIZES as size (size)}
						<option value={size}>{size}</option>
					{/each}
				</select>
				<div class="mt-3 text-xs">{$paramSize}</div>
			</div>
		</div>
		<div class="flex flex-row items-start gap-4">
			<div class="flex-1 text-end">
				<label for="color-select">Color</label>
			</div>
			<div class="flex-1">
				<select
					id="color-select"
					class="flex justify-center items-center p-2 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-xs cursor-pointer"
					onchange={(event) => {
						setParamColor(event.currentTarget.value);
					}}
					value={$paramColor}
				>
					{#each COLORS as color (color)}
						<option value={color}>{color}</option>
					{/each}
				</select>
				<div class="mt-3 text-xs">{$paramColor}</div>
			</div>
		</div>
	</div>
</div>
