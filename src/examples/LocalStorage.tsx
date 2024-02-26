import { useLocalStorage } from "@hooks/ReactLocalStorage";
import { useEffect, useState } from "react";

const MODES = ["LIGHT", "DARK"] as const;
const PRIMARY_COLORS = ["RED", "GREEN", "BLUE"] as const;

function Hydration() {
	const [storageMode, setStorageMode] = useLocalStorage(
		"mode",
		MODES[0],
		true,
	);
	const [storagePrimaryColor, setStoragePrimaryColor] = useLocalStorage(
		"primaryCOlor",
		PRIMARY_COLORS[0],
		true,
	);

	return (
		<>
			<div className="mb-2">
				<div className="flex flex-col gap-4 p-4 border border-zinc-700 rounded-md bg-zinc-900">
					<div className="flex flex-row justify-center items-start gap-2">
						<a
							className="flex justify-center items-center p-2 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-xs uppercase cursor-pointer"
							href="./localstorage"
							target="_blank"
							rel="noopener"
						>
							Open New Tab
						</a>
					</div>
					<div className="flex flex-row items-start gap-4">
						<div className="flex-1 text-end">
							<label htmlFor="size-select">Mode</label>
						</div>
						<div className="flex-1">
							<select
								id="size-select"
								className="flex justify-center items-center p-2 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-xs cursor-pointer"
								onChange={(event) => {
									setStorageMode(event.currentTarget.value);
								}}
								value={storageMode}
							>
								{MODES.map((mode) => (
									<option key={mode} value={mode}>
										{mode}
									</option>
								))}
							</select>
							<div className="mt-3 text-xs">{storageMode}</div>
						</div>
					</div>
					<div className="flex flex-row items-start gap-4">
						<div className="flex-1 text-end">
							<label htmlFor="color-select">Primary Color</label>
						</div>
						<div className="flex-1">
							<select
								id="color-select"
								className="flex justify-center items-center p-2 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-xs cursor-pointer"
								onChange={(event) => {
									setStoragePrimaryColor(
										event.currentTarget.value,
									);
								}}
								value={storagePrimaryColor}
							>
								{PRIMARY_COLORS.map((color) => (
									<option key={color} value={color}>
										{color}
									</option>
								))}
							</select>
							<div className="mt-3 text-xs">
								{storagePrimaryColor}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export function LocalStorage() {
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
					<div className="flex flex-row justify-center items-start gap-2">
						<a
							className="flex justify-center items-center p-2 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-xs uppercase cursor-pointer"
							href="./localstorage"
							target="_blank"
							rel="noopener"
						>
							Open New Tab
						</a>
					</div>
					<div className="flex flex-row items-start gap-4">
						<div className="flex-1 text-end">
							<label htmlFor="size-select">Mode</label>
						</div>
						<div className="flex-1">
							<select
								id="size-select"
								className="flex justify-center items-center p-2 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-xs cursor-pointer"
							></select>
							<div className="mt-3 text-xs">STAY HYDRATE</div>
						</div>
					</div>
					<div className="flex flex-row items-start gap-4">
						<div className="flex-1 text-end">
							<label htmlFor="color-select">Primary Color</label>
						</div>
						<div className="flex-1">
							<select
								id="color-select"
								className="flex justify-center items-center p-2 rounded bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 text-xs cursor-pointer"
							></select>
							<div className="mt-3 text-xs">STAY HYDRATE</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
