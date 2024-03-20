import { useEffect, useState } from "react";
import { useMousePosition } from "@hooks/ReactMousePosition";

function Hydration() {
	const {
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
	} = useMousePosition<HTMLDivElement>(true);

	return (
		<div className="mb-2">
			<div className="flex flex-col gap-4 p-4 border border-zinc-700 rounded-md bg-zinc-900">
				<div className="flex flex-col gap-2">
					<div className="flex flex-row gap-2 justify-center">
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							hover: {`${hover}`}
						</div>
					</div>
					<div className="flex flex-row gap-2 justify-center">
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							hoverPixelX: {hoverPixelX.toFixed(0)}px
						</div>
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							hoverPixelY: {hoverPixelY.toFixed(0)}px
						</div>
					</div>
					<div className="flex flex-row gap-2 justify-center">
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							hoverPercentX: {hoverPercentX.toFixed(0)}%
						</div>
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							hoverPercentY: {hoverPercentY.toFixed(0)}%
						</div>
					</div>
					<div className="flex flex-row gap-2 justify-center">
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							active: {`${active}`}
						</div>
					</div>
					<div className="flex flex-row gap-2 justify-center">
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							activePixelX: {activePixelX.toFixed(0)}px
						</div>
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							activePixelY: {activePixelY.toFixed(0)}px
						</div>
					</div>
					<div className="flex flex-row gap-2 justify-center">
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							activePercentX: {activePercentX.toFixed(0)}%
						</div>
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							activePercentY: {activePercentY.toFixed(0)}%
						</div>
					</div>
				</div>
				<div
					ref={refTargetElement}
					className="target-demo flex flex-col justify-center items-center p-4 border border-zinc-700 rounded-md bg-zinc-900"
					style={{
						aspectRatio: "2/1",
						touchAction: "none",
					}}
				>
					<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
						target
					</div>
				</div>
				<div className="self-center px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
					touch-action: none; // to disable scroll on touch screen
					device
				</div>
			</div>
		</div>
	);
}

export function MousePosition() {
	const [hydration, setHydration] = useState(false);

	useEffect(() => {
		setHydration(true);
	});

	if (hydration) {
		return <Hydration />;
	}

	return (
		<div className="mb-2">
			<div className="flex flex-col gap-4 p-4 border border-zinc-700 rounded-md bg-zinc-900">
				<div className="flex flex-col gap-2">
					<div className="flex flex-row gap-2 justify-center">
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							hover: HYDRATE
						</div>
					</div>
					<div className="flex flex-row gap-2 justify-center">
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							hoverPixelX: HYDRATE
						</div>
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							hoverPixelY: HYDRATE
						</div>
					</div>
					<div className="flex flex-row gap-2 justify-center">
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							hoverPercentX: HI MOM
						</div>
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							hoverPercentY: HYDRATE
						</div>
					</div>
					<div className="flex flex-row gap-2 justify-center">
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							active: HYDRATE
						</div>
					</div>
					<div className="flex flex-row gap-2 justify-center">
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							activePixelX: HYDRATE
						</div>
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							activePixelY: HYDRATE
						</div>
					</div>
					<div className="flex flex-row gap-2 justify-center">
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							activePercentX: HYDRATE
						</div>
						<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
							activePercentY: HYDRATE
						</div>
					</div>
				</div>
				<div
					className="target-demo flex flex-col justify-center items-center p-4 border border-zinc-700 rounded-md bg-zinc-900"
					style={{
						aspectRatio: "2/1",
						touchAction: "none",
					}}
				>
					<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
						target
					</div>
				</div>
				<div className="self-center px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
					touch-action: none; // to disable scroll on touch screen
					device
				</div>
			</div>
		</div>
	);
}
