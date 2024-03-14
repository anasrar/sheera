import { useElementDimension } from "@hooks/ReactElementDimension";
import { useEffect, useState } from "react";

function Hydration() {
	const { refTargetElement, dimension } =
		useElementDimension<HTMLDivElement>();

	return (
		<div className="mb-2">
			<div className="flex flex-col gap-4 p-4 border border-zinc-700 rounded-md bg-zinc-900">
				<div className="flex flex-row gap-2 justify-center">
					<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
						inline: {dimension.inline}px
					</div>
					<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
						block: {dimension.block}px
					</div>
				</div>
				<div
					ref={refTargetElement}
					className="target-demo flex flex-row justify-center items-center p-4 border border-zinc-700 rounded-md bg-zinc-900"
					style={{ aspectRatio: "2/1" }}
				>
					<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
						aspect-ratio: 2/1
					</div>
				</div>
				<div className="text-center text-sm">Resize the Browser</div>
			</div>
		</div>
	);
}

export function ElementDimension() {
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
				<div className="flex flex-row gap-2 justify-center">
					<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
						inline: HYDRATEEE AGAIN
					</div>
					<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
						block: HYDRATEEE AGAIN
					</div>
				</div>
				<div
					className="target-demo flex flex-row justify-center items-center p-4 border border-zinc-700 rounded-md bg-zinc-900"
					style={{ aspectRatio: "2/1" }}
				>
					<div className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
						aspect-ratio: 2/1
					</div>
				</div>
				<div className="text-center text-sm">Resize the Browser</div>
			</div>
		</div>
	);
}
