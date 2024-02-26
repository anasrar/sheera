<script lang="ts">
	import { createLocalStorage } from "@hooks/SvelteLocalStorage.svelte";

	const MODES = ["LIGHT", "DARK"] as const;
	const PRIMARY_COLORS = ["RED", "GREEN", "BLUE"] as const;

	const [storageMode, setStorageMode] = createLocalStorage(
		"mode",
		MODES[0],
		true,
	);
	const [storagePrimaryColor, setStoragePrimaryColor] = createLocalStorage(
		"primaryCOlor",
		PRIMARY_COLORS[0],
		true,
	);
</script>

<div class="mb-2">
	<div
		class="flex flex-col gap-4 p-4 border border-zinc-700 rounded-md bg-zinc-900"
	>
		<div class="flex flex-row justify-center items-start gap-2">
			<a
				class="flex justify-center items-center p-2 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-xs uppercase cursor-pointer"
				href="./localstorage"
				target="_blank"
				rel="noopener"
			>
				Open New Tab
			</a>
		</div>
		<div class="flex flex-row items-start gap-4">
			<div class="flex-1 text-end">
				<label for="size-select">Mode</label>
			</div>
			<div class="flex-1">
				<select
					id="size-select"
					class="flex justify-center items-center p-2 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-xs cursor-pointer"
					onchange={(event) => {
						setStorageMode(event.currentTarget.value);
					}}
					value={$storageMode}
				>
					{#each MODES as mode (mode)}
						<option value={mode}>{mode}</option>
					{/each}
				</select>
				<div class="mt-3 text-xs">{$storageMode}</div>
			</div>
		</div>
		<div class="flex flex-row items-start gap-4">
			<div class="flex-1 text-end">
				<label for="color-select">Primary Color</label>
			</div>
			<div class="flex-1">
				<select
					id="color-select"
					class="flex justify-center items-center p-2 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-xs cursor-pointer"
					onchange={(event) => {
						setStoragePrimaryColor(event.currentTarget.value);
					}}
					value={$storagePrimaryColor}
				>
					{#each PRIMARY_COLORS as color (color)}
						<option value={color}>{color}</option>
					{/each}
				</select>
				<div class="mt-3 text-xs">{$storagePrimaryColor}</div>
			</div>
		</div>
	</div>
</div>
