import { useSearchParam } from "@hooks/ReactSearchParam";
import { useEffect, useState } from "react";

const SIZES = ["SMALL", "MEDIUM", "LARGE"] as const;
const COLORS = ["RED", "GREEN", "BLUE"] as const;

function Hydration() {
	const [paramSize, setParamSize] = useSearchParam("size", SIZES[0]);
	const [paramColor, setParamColor] = useSearchParam("color", COLORS[0]);

	return (
		<>
			<div className="mb-2">
				<div className="flex flex-col gap-4 p-4 border border-zinc-700 rounded-md bg-zinc-900">
					<div className="flex flex-row items-start gap-4">
						<div className="flex-1 text-end">
							<label htmlFor="size-select">Size</label>
						</div>
						<div className="flex-1">
							<select
								id="size-select"
								className="flex justify-center items-center p-2 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-xs cursor-pointer"
								onChange={(event) => {
									setParamSize(event.currentTarget.value);
								}}
								value={paramSize}
							>
								{SIZES.map((size) => (
									<option key={size} value={size}>
										{size}
									</option>
								))}
							</select>
							<div className="mt-3 text-xs">{paramSize}</div>
						</div>
					</div>
					<div className="flex flex-row items-start gap-4">
						<div className="flex-1 text-end">
							<label htmlFor="color-select">Color</label>
						</div>
						<div className="flex-1">
							<select
								id="color-select"
								className="flex justify-center items-center p-2 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-xs cursor-pointer"
								onChange={(event) => {
									setParamColor(event.currentTarget.value);
								}}
								value={paramColor}
							>
								{COLORS.map((color) => (
									<option key={color} value={color}>
										{color}
									</option>
								))}
							</select>
							<div className="mt-3 text-xs">{paramColor}</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export function SearchParam() {
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
					<div className="flex flex-row items-start gap-4">
						<div className="flex-1 text-end">
							<label htmlFor="size-select">Size</label>
						</div>
						<div className="flex-1">
							<select
								id="size-select"
								className="flex justify-center items-center p-2 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-xs cursor-pointer"
							></select>
							<div className="mt-3 text-xs">
								HYDRATION FLASH ?
							</div>
						</div>
					</div>
					<div className="flex flex-row items-start gap-4">
						<div className="flex-1 text-end">
							<label htmlFor="color-select">Color</label>
						</div>
						<div className="flex-1">
							<select
								id="color-select"
								className="flex justify-center items-center p-2 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-xs cursor-pointer"
							></select>
							<div className="mt-3 text-xs">
								HYDRATION FLASH ?
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
