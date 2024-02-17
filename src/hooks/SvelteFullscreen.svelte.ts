import { onMount } from "svelte";
import type { Action } from "svelte/action";
import { writable } from "svelte/store";

export function createFullscreen<TElement extends HTMLElement>() {
	let targetElement: TElement | null = null;
	const fullscreen = writable(false);

	onMount(() => {
		const fullscreenchanged = () => {
			const element = targetElement ?? document.body;
			fullscreen.set(document.fullscreenElement === element);
		};

		document.addEventListener("fullscreenchange", fullscreenchanged);

		return () => {
			document.removeEventListener("fullscreenchange", fullscreenchanged);
		};
	});

	const refTargetElement: Action<TElement> = (node) => {
		targetElement = node;
	};

	const enterFullscreen = async (options?: FullscreenOptions) => {
		return await (targetElement ?? document.body).requestFullscreen(
			options,
		);
	};

	const exitFullscreen = async () => {
		return await document.exitFullscreen();
	};

	return {
		refTargetElement,
		fullscreen,
		enterFullscreen,
		exitFullscreen,
	};
}
