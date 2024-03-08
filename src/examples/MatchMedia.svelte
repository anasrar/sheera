<script lang="ts">
	import { createMatchMedia } from "@hooks/SvelteMatchMedia.svelte";

	const greaterThan600Px = createMatchMedia("(min-width: 600px)");
</script>

<div class="mb-2">
	<div
		class="flex flex-col gap-4 p-4 border border-zinc-700 rounded-md bg-zinc-900"
	>
		<div class="flex flex-col justify-center items-center gap-2">
			<div>
				<span
					class="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm"
				>
					screenWidth &gt;= 600px
				</span>
			</div>
			<div>
				<span
					class="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm"
				>
					{$greaterThan600Px}
				</span>
			</div>
		</div>
		<div class="text-center text-sm">Resize the Browser</div>
		<div class="text-blue-400 text-center text-sm underline">
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries"
			>
				Using media queries - CSS: Cascading Style Sheets | MDN
			</a>
		</div>
	</div>
</div>
