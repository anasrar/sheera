import { useEffect, useRef, useState } from "react";

export function useFullscreen<TElement extends HTMLElement>() {
	const refTargetElement = useRef<TElement>(null);
	const [fullscreen, setFullscreen] = useState(false);

	useEffect(() => {
		const fullscreenchanged = () => {
			const element = refTargetElement.current ?? document.body;

			setFullscreen(document.fullscreenElement === element);
		};

		document.addEventListener("fullscreenchange", fullscreenchanged);

		return () => {
			document.removeEventListener("fullscreenchange", fullscreenchanged);
		};
	}, []);

	const enterFullscreen = async (options?: FullscreenOptions) => {
		return await (
			refTargetElement.current ?? document.body
		).requestFullscreen(options);
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
