<script lang="ts">
	import type { Snippet } from "svelte";

	let { class: className, children } = $props<{
		class: string;
		children: Snippet;
	}>();
	const renderChildren = children();
</script>

<div class="relative mb-4 overflow-clip rounded-md">
	<div class="sticky top-0 h-0 text-end">
		<button
			class="sheera-copy-code inline-flex justify-center items-center p-2 m-2 md:m-4 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 disabled:bg-zinc-800"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="w-4 h-4"
			>
				<path
					fill-rule="evenodd"
					d="M10.986 3H12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1.014A2.25 2.25 0 0 1 7.25 1h1.5a2.25 2.25 0 0 1 2.236 2ZM9.5 4v-.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V4h3Z"
					clip-rule="evenodd"
				/>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="hidden w-4 h-4"
			>
				<path
					fill-rule="evenodd"
					d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
	<div
		class="pre-wrapper overflow-x-auto overflow-y-clip border border-b-0 border-zinc-700 rounded-t-md"
	>
		<pre class={className}>{@html renderChildren}</pre>
	</div>
	<div
		class="p-2 md:p-4 border border-zinc-700 rounded-b-md bg-zinc-900 bg-opacity-70 backdrop-blur"
	>
		<button
			class="sheera-expand-code flex justify-center items-center w-full p-2 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-xs uppercase"
		>
			Show full code
		</button>
	</div>
</div>

<style lang="scss">
	.pre-wrapper {
		max-height: 16rem;
		transition: max-height 0.3s linear;
	}

	:global([data-expanded]) {
		position: sticky;
		bottom: 3rem;

		@media (min-width: 768px) {
			bottom: 4rem;
		}
	}

	pre {
		display: inline-grid;
	}

	:global(pre > code) {
		padding: 0.5rem;
		margin-right: 2.5rem;

		@media (min-width: 768px) {
			padding: 1rem;
			margin-right: 3rem;
		}
	}
</style>
