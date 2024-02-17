import { useFullscreen } from "@hooks/ReactFullscreen";

export function Fullscreen() {
	const { refTargetElement, fullscreen, enterFullscreen, exitFullscreen } =
		useFullscreen<HTMLDivElement>();

	return (
		<div className="overflow-clip mb-2 border border-zinc-700 rounded-md">
			<div className="p-4 bg-zinc-800">
				<div className="w-max px-2 py-1 mb-4 rounded text-blue-100 bg-blue-600 font-bold text-xs uppercase">
					Parent
				</div>
				<div className="overflow-clip border border-zinc-700 rounded-md">
					<div
						className="flex flex-col p-4 bg-zinc-900"
						ref={refTargetElement}
					>
						<div className="w-max px-2 py-1 mb-4 rounded text-green-100 bg-teal-600 font-bold text-xs uppercase">
							Target Element
						</div>
						<div className="flex grow flex-col justify-center items-center">
							<button
								className="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 rounded bg-zinc-600 hover:bg-zinc-500"
								onClick={() => {
									fullscreen
										? exitFullscreen()
										: enterFullscreen();
								}}
							>
								{fullscreen ? (
									<>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 16 16"
											fill="currentColor"
											className="w-4 h-4"
										>
											<path
												fillRule="evenodd"
												d="M2.22 2.22a.75.75 0 0 1 1.06 0L5.5 4.44V2.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L2.22 3.28a.75.75 0 0 1 0-1.06Zm10.5 0a.75.75 0 1 1 1.06 1.06L11.56 5.5h1.69a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 9 6.25v-3.5a.75.75 0 0 1 1.5 0v1.69l2.22-2.22ZM2.75 9h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-1.69l-2.22 2.22a.75.75 0 0 1-1.06-1.06l2.22-2.22H2.75a.75.75 0 0 1 0-1.5ZM9 9.75A.75.75 0 0 1 9.75 9h3.5a.75.75 0 0 1 0 1.5h-1.69l2.22 2.22a.75.75 0 1 1-1.06 1.06l-2.22-2.22v1.69a.75.75 0 0 1-1.5 0v-3.5Z"
												clipRule="evenodd"
											/>
										</svg>
										Exit Fullscreen
									</>
								) : (
									<>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 16 16"
											fill="currentColor"
											className="w-4 h-4"
										>
											<path
												fillRule="evenodd"
												d="M2.75 9a.75.75 0 0 1 .75.75v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L4.56 12.5h1.69a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 2.75 9ZM2.75 7a.75.75 0 0 0 .75-.75V4.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h1.69a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75ZM13.25 9a.75.75 0 0 0-.75.75v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22H9.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75ZM13.25 7a.75.75 0 0 1-.75-.75V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22H9.75a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75Z"
												clipRule="evenodd"
											/>
										</svg>
										Enter Fullscreen
									</>
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
