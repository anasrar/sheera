import { useMatchMedia } from "@hooks/ReactMatchMedia";
import { useEffect, useState } from "react";

function Hydration() {
	const greaterThan600Px = useMatchMedia("(min-width: 600px)");

	return (
		<>
			<div className="mb-2">
				<div className="flex flex-col gap-4 p-4 border border-zinc-700 rounded-md bg-zinc-900">
					<div className="flex flex-col justify-center items-center gap-2">
						<div>
							<span className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
								screenWidth &gt;= 600px
							</span>
						</div>
						<div>
							<span className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
								{`${greaterThan600Px}`}
							</span>
						</div>
					</div>
					<div className="text-center text-sm">
						Resize the Browser
					</div>
					<div className="text-blue-400 text-center text-sm underline">
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries">
							Using media queries - CSS: Cascading Style Sheets |
							MDN
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export function MatchMedia() {
	const [hydration, setHydration] = useState(false);

	useEffect(() => {
		setHydration(true);
	});

	if (hydration) {
		return <Hydration />;
	}

	return (
		<>
			<div className="mb-2">
				<div className="flex flex-col gap-4 p-4 border border-zinc-700 rounded-md bg-zinc-900">
					<div className="flex flex-col justify-center items-center gap-2">
						<div>
							<span className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
								screenWidth &gt;= 600px
							</span>
						</div>
						<div>
							<span className="inline-block px-2 py-1 rounded text-zinc-100 bg-zinc-700 font-mono text-sm">
								HYDRATEEEEE
							</span>
						</div>
					</div>
					<div className="text-center text-sm">
						Resize the Browser
					</div>
					<div className="text-blue-400 text-center text-sm underline">
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries">
							Using media queries - CSS: Cascading Style Sheets |
							MDN
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
