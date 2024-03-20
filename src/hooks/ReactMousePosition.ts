import { useEffect, useRef, useState } from "react";

export function useMousePosition<TElement extends HTMLElement>(
	touch?: boolean,
) {
	const refTargetElement = useRef<TElement>(null);
	const _local = {
		active: false,
		hover: {
			pixelX: 0,
			pixelY: 0,
			percentX: 0,
			percentY: 0,
		},
	};
	const [hover, setHover] = useState(false);
	const [hoverPixelX, setHoverPixelX] = useState(0);
	const [hoverPixelY, setHoverPixelY] = useState(0);
	const [hoverPercentX, setHoverPercentX] = useState(0);
	const [hoverPercentY, setHoverPercentY] = useState(0);
	const [active, setActive] = useState(false);
	const [activePixelX, setActivePixelX] = useState(0);
	const [activePixelY, setActivePixelY] = useState(0);
	const [activePercentX, setActivePercentX] = useState(0);
	const [activePercentY, setActivePercentY] = useState(0);

	useEffect(() => {
		const onMove = (clientX: number, clientY: number) => {
			if (refTargetElement.current) {
				const { left, top, width, height } =
					refTargetElement.current.getBoundingClientRect();
				const x = clientX - left;
				const y = clientY - top;
				const pX = Math.max(Math.min((x / width) * 100, 100), 0);
				const pY = Math.max(Math.min((y / height) * 100, 100), 0);
				setHoverPixelX(x);
				setHoverPixelY(y);
				setHoverPercentX(pX);
				setHoverPercentY(pY);
				_local.hover = {
					pixelX: x,
					pixelY: y,
					percentX: pX,
					percentY: pY,
				};
				if (_local.active) {
					setActivePixelX(x);
					setActivePixelY(y);
					setActivePercentX(pX);
					setActivePercentY(pY);
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
				setHoverPixelX(clientX);
				setHoverPixelY(clientY);
				setHoverPercentX(pX);
				setHoverPercentY(pY);
				_local.hover = {
					pixelX: clientX,
					pixelY: clientY,
					percentX: pX,
					percentY: pY,
				};
				if (_local.active) {
					setActivePixelX(clientX);
					setActivePixelY(clientY);
					setActivePercentX(pX);
					setActivePercentY(pY);
				}
			}
		};

		const mouseEnter = () => {
			setHover(true);
		};
		const mouseLeave = () => {
			setHover(false);
			setActive(false);
			_local.active = false;
		};
		const mouseMove = (event: MouseEvent) => {
			const { clientX, clientY } = event;
			onMove(clientX, clientY);
		};
		const mouseDown = (event: MouseEvent) => {
			if (event.button === 0) {
				setActive(true);
				_local.active = true;
				setActivePixelX(_local.hover.pixelX);
				setActivePixelY(_local.hover.pixelY);
				setActivePercentX(_local.hover.percentX);
				setActivePercentY(_local.hover.percentY);
			}
		};
		const mouseUp = (event: MouseEvent) => {
			if (event.button === 0) {
				setActive(false);
				_local.active = false;
			}
		};

		const touchStart = () => {
			setHover(true);
			setActive(true);
			_local.active = true;
		};
		const touchEnd = () => {
			setHover(false);
			setActive(false);
			_local.active = false;
		};
		const touchMove = (event: TouchEvent) => {
			const { clientX, clientY } = event.touches[0];
			onMove(clientX, clientY);
		};

		const target = refTargetElement.current ?? document.documentElement;

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
	}, []);

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
