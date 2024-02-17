<script lang="ts">
	import type { Snippet } from "svelte";

	let { id, children } = $props<{ id: string; children: Snippet }>();
	const renderChildren = children();
</script>

<div {id} class="mb-4 flex flex-row justify-between items-center">
	<h2 class="font-bold text-xl">{@html renderChildren}</h2>
	<a
		href={`#${id}`}
		class="opacity-50 hover:opacity-100"
		aria-label={`Heading anchor for {id}`}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			fill="currentColor"
			class="w-4 h-4"
		>
			<path
				fill-rule="evenodd"
				d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
				clip-rule="evenodd"
			/>
			<path
				fill-rule="evenodd"
				d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
				clip-rule="evenodd"
			/>
		</svg>
	</a>
</div>
