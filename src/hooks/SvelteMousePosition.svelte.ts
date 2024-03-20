import { writable } from "svelte/store";
import type { Action } from "svelte/action";
import { onMount } from "svelte";

export function createMousePosition<TElement extends HTMLElement>(
	touch?: boolean,
) {
	let targetElement: TElement | null = null;
	let _active = false;
	let _hover = {
		pixelX: 0,
		pixelY: 0,
		percentX: 0,
		percentY: 0,
	};
	const hover = writable(false);
	const hoverPixelX = writable(0);
	const hoverPixelY = writable(0);
	const hoverPercentX = writable(0);
	const hoverPercentY = writable(0);
	const active = writable(false);
	const activePixelX = writable(0);
	const activePixelY = writable(0);
	const activePercentX = writable(0);
	const activePercentY = writable(0);

	const refTargetElement: Action<TElement> = (node) => {
		targetElement = node;
	};

	onMount(() => {
		const onMove = (clientX: number, clientY: number) => {
			if (targetElement) {
				const { left, top, width, height } =
					targetElement.getBoundingClientRect();
				const x = clientX - left;
				const y = clientY - top;
				const pX = Math.max(Math.min((x / width) * 100, 100), 0);
				const pY = Math.max(Math.min((y / height) * 100, 100), 0);
				hoverPixelX.set(x);
				hoverPixelY.set(y);
				hoverPercentX.set(pX);
				hoverPercentY.set(pY);
				_hover = {
					pixelX: x,
					pixelY: y,
					percentX: pX,
					percentY: pY,
				};
				if (_active) {
					activePixelX.set(x);
					activePixelY.set(y);
					activePercentX.set(pX);
					activePercentY.set(pY);
				}
			} else {
				const { innerWidth, innerHeight } = window;
				const pX = Math.max(
					Math.min((clientX / innerWidth) * 100, 100),
					0,
				);
				const pY = Math.max(
					Math.min((clientY / innerHeight) * 100, 100),
					0,
				);
				hoverPixelX.set(clientX);
				hoverPixelY.set(clientY);
				hoverPercentX.set(pX);
				hoverPercentY.set(pY);
				_hover = {
					pixelX: clientX,
					pixelY: clientY,
					percentX: pX,
					percentY: pY,
				};
				if (_active) {
					activePixelX.set(clientX);
					activePixelY.set(clientY);
					activePercentX.set(pX);
					activePercentY.set(pY);
				}
			}
		};

		const mouseEnter = () => {
			hover.set(true);
		};
		const mouseLeave = () => {
			hover.set(false);
			active.set(false);
			_active = false;
		};
		const mouseMove = (event: MouseEvent) => {
			const { clientX, clientY } = event;
			onMove(clientX, clientY);
		};
		const mouseDown = (event: MouseEvent) => {
			if (event.button === 0) {
				active.set(true);
				_active = true;
				activePixelX.set(_hover.pixelX);
				activePixelY.set(_hover.pixelY);
				activePercentX.set(_hover.percentX);
				activePercentY.set(_hover.percentY);
			}
		};
		const mouseUp = (event: MouseEvent) => {
			if (event.button === 0) {
				active.set(false);
				_active = false;
			}
		};

		const touchStart = () => {
			hover.set(true);
			active.set(true);
			_active = true;
		};
		const touchEnd = () => {
			hover.set(false);
			active.set(false);
			_active = false;
		};
		const touchMove = (event: TouchEvent) => {
			const { clientX, clientY } = event.touches[0];
			onMove(clientX, clientY);
		};

		const target = targetElement ?? document.documentElement;

		target.addEventListener("mouseenter", mouseEnter);
		target.addEventListener("mouseleave", mouseLeave);
		target.addEventListener("mousemove", mouseMove);
		target.addEventListener("mousedown", mouseDown);
		target.addEventListener("mouseup", mouseUp);

		if (touch) {
			target.addEventListener("touchstart", touchStart);
			target.addEventListener("touchend", touchEnd);
			target.addEventListener("touchmove", touchMove);
		}
		return () => {
			target.removeEventListener("mouseenter", mouseEnter);
			target.removeEventListener("mouseleave", mouseLeave);
			target.removeEventListener("mousemove", mouseMove);
			target.removeEventListener("mousedown", mouseDown);
			target.removeEventListener("mouseup", mouseUp);

			if (touch) {
				target.removeEventListener("touchstart", touchStart);
				target.removeEventListener("touchend", touchEnd);
				target.removeEventListener("touchmove", touchMove);
			}
		};
	});

	return {
		refTargetElement,
		hover,
		hoverPixelX,
		hoverPixelY,
		hoverPercentX,
		hoverPercentY,
		active,
		activePixelX,
		activePixelY,
		activePercentX,
		activePercentY,
	};
}
