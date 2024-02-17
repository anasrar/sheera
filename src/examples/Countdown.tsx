import { useEffect, useState } from "react";
import { useCountdown } from "@hooks/ReactCountdown";

function Hydration() {
	const { finish, paused, time, start, pause, resume, stop } = useCountdown();

	return (
		<div className="mb-2">
			<div className="flex flex-col p-4 border border-zinc-700 rounded-md bg-zinc-900">
				<div className="flex grow flex-col justify-center items-center gap-4">
					<button
						className="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 rounded disabled:opacity-50 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:bg-zinc-700 tabular-nums disabled:cursor-not-allowed"
						disabled={!finish}
						onClick={() => start(90)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="w-4 h-4"
						>
							<path
								fillRule="evenodd"
								d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
								clipRule="evenodd"
							/>
						</svg>
						Resend Code{" "}
						{!finish
							? `(${new Date(time * 1000).toLocaleString("en-US", { minute: "2-digit", second: "2-digit" })})`
							: null}
					</button>
					<div className="flex grow flex-row justify-center items-center gap-2">
						<button
							className="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 disabled:opacity-50 rounded bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-700 disabled:bg-zinc-700 disabled:cursor-not-allowed"
							disabled={finish || paused}
							onClick={() => {
								pause();
							}}
						>
							Pause
						</button>
						<button
							className="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 disabled:opacity-50 rounded bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-700 disabled:bg-zinc-700 disabled:cursor-not-allowed"
							disabled={finish || !paused}
							onClick={() => {
								resume();
							}}
						>
							Resume
						</button>
						<button
							className="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 disabled:opacity-50 rounded bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-700 disabled:bg-zinc-700 disabled:cursor-not-allowed"
							disabled={finish}
							onClick={() => {
								stop();
							}}
						>
							Stop
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export function Countdown() {
	const [hydration, setHydration] = useState(false);

	useEffect(() => {
		setHydration(true);
	});

	if (hydration) {
		return <Hydration />;
	}

	return (
		<div className="mb-4">
			<div className="flex flex-col p-4 border border-zinc-700 rounded-md bg-zinc-900">
				<div className="flex grow flex-col justify-center items-center gap-4">
					<button className="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 rounded disabled:opacity-50 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:bg-zinc-700 tabular-nums disabled:cursor-not-allowed">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="w-4 h-4"
						>
							<path
								fillRule="evenodd"
								d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
								clipRule="evenodd"
							/>
						</svg>
						Resend Code
					</button>
					<div className="flex grow flex-row justify-center items-center gap-2">
						<button
							className="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 disabled:opacity-50 rounded bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-700 disabled:bg-zinc-700 disabled:cursor-not-allowed"
							disabled
						>
							Pause
						</button>
						<button
							className="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 disabled:opacity-50 rounded bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-700 disabled:bg-zinc-700 disabled:cursor-not-allowed"
							disabled
						>
							Resume
						</button>
						<button
							className="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 disabled:opacity-50 rounded bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-700 disabled:bg-zinc-700 disabled:cursor-not-allowed"
							disabled
						>
							Stop
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
