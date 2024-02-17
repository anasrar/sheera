<script lang="ts">
	import type { Snippet } from "svelte";

	let { children } = $props<{ children: Snippet }>();
	const renderChildren = children();
</script>

<p class="mb-4">{@html renderChildren}</p>
