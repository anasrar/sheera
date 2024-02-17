<script lang="ts">
	import { type CollectionEntry } from "astro:content";
	import { tweened } from "svelte/motion";
	import { cubicInOut } from "svelte/easing";
	import { get, writable } from "svelte/store";
	import { stateGlobal } from "@states/global.svelte";

	const { framework, slug, data } = $props<{
		framework: typeof stateGlobal.framework;
		slug: string;
		data: CollectionEntry<"svelte">["data"];
	}>();

	const prefixText = writable(framework === "SVELTE" ? "create" : "use");
	const prefixSlug = writable(framework.toLowerCase());
	let targetClip = $state<HTMLSpanElement>();
	let targetText = $state<HTMLSpanElement>();

	const width = tweened<number>(undefined, {
		duration: 300,
		easing: cubicInOut,
	});

	$effect(() => {
		if (targetClip && targetText) {
			if (get(width) === undefined) {
				width.set(targetText.offsetWidth, { duration: 0 });
			} else {
				width.set(0);
				setTimeout(() => {
					prefixText.set(
						stateGlobal.framework === "SVELTE" ? "create" : "use",
					);
					prefixSlug.set(stateGlobal.framework.toLowerCase());
				}, 400);
				setTimeout(() => {
					width.set(targetText!.offsetWidth);
				}, 500);
			}
		}
		stateGlobal.framework;
	});
</script>

<div class="contents cursor-pointer text-zinc-400 hover:text-zinc-200">
	<a
		class="inline-flex flex-row w-max ml-auto text-zinc-200 font-bold text-end"
		href={`/${$prefixSlug}/${slug}`}
	>
		<span
			bind:this={targetClip}
			class="overflow-hidden"
			style="width: {$width}px; direction: rtl"
		>
			<span bind:this={targetText}>{$prefixText}</span>
		</span>
		<span>{data.title}</span>
	</a>
	<a
		class="overflow-hidden whitespace-nowrap text-ellipsis"
		href={`/${$prefixSlug}/${slug}`}
	>
		{data.description}
	</a>
</div>
