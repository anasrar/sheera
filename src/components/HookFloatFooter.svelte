<script lang="ts">
	import { writable } from "svelte/store";
	import { stateGlobal } from "@states/global.svelte";

	const { framework, hook } = $props<{
		framework: typeof stateGlobal.framework;
		hook: string;
	}>();

	const currentFramework = writable(framework);

	const frameworks: (typeof stateGlobal.framework)[] = ["REACT", "SVELTE"];
</script>

<footer class="sticky bottom-0">
	<div
		class="flex flex-row gap-1 md:gap-2 p-2 md:p-4 border border-b-0 border-zinc-700 rounded-t-md text-zinc-200 bg-zinc-900 bg-opacity-70 backdrop-blur"
	>
		{#each frameworks as frameworkName}
			{#if frameworkName === $currentFramework}
				<button
					class="flex justify-center items-center w-16 p-2 rounded bg-indigo-600 text-xs uppercase cursor-default"
					disabled
				>
					{frameworkName}
				</button>
			{:else}
				<a
					href={`../${frameworkName.toLowerCase()}/${hook}`}
					class="flex justify-center items-center w-16 p-2 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-xs uppercase"
				>
					{frameworkName}
				</a>
			{/if}
		{/each}
		<a
			href={`../`}
			class="flex justify-center items-center ml-auto p-2 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-xs uppercase"
			aria-label="Home"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="w-4 h-4"
			>
				<path
					d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z"
				/>
			</svg>
		</a>
	</div>
</footer>
