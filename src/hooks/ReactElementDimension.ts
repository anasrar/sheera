import { useEffect, useRef, useState } from "react";

export function useElementDimension<TElement extends HTMLElement>() {
	const refTargetElement = useRef<TElement>(null);
	const [dimension, setDimension] = useState<{
		inline: number;
		block: number;
	}>({
		inline: 0,
		block: 0,
	});

	useEffect(() => {
		if (!refTargetElement.current) return;

		const observer = new window.ResizeObserver((entries) => {
			for (const entry of entries) {
				if (entry.contentBoxSize) {
					const size = entry.borderBoxSize.at(0);
					if (size) {
						const { inlineSize, blockSize } = size;
						setDimension({
							inline: inlineSize,
							block: blockSize,
						});
					}
				} else {
					const { width, height } = entry.contentRect;
					setDimension({ inline: width, block: height });
				}
			}
		});

		observer.observe(refTargetElement.current);

		return () => {
			observer.disconnect();
		};
	});

	return {
		refTargetElement,
		dimension,
	};
}
