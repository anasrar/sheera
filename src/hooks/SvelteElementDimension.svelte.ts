import { onMount } from "svelte";
import type { Action } from "svelte/action";
import { writable } from "svelte/store";

export function createElementDimension<TElement extends HTMLElement>() {
	let targetElement: TElement | null = null;
	const dimension = writable<{ inline: number; block: number }>({
		inline: 0,
		block: 0,
	});

	const refTargetElement: Action<TElement> = (node) => {
		targetElement = node;
	};

	onMount(() => {
		if (!targetElement) return;

		const observer = new window.ResizeObserver((entries) => {
			for (const entry of entries) {
				if (entry.contentBoxSize) {
					const size = entry.borderBoxSize.at(0);
					if (size) {
						const { inlineSize, blockSize } = size;
						dimension.set({
							inline: inlineSize,
							block: blockSize,
						});
					}
				} else {
					const { width, height } = entry.contentRect;
					dimension.set({ inline: width, block: height });
				}
			}
		});

		observer.observe(targetElement);

		return () => {
			observer.disconnect();
		};
	});

	return {
		refTargetElement,
		dimension,
	};
}
