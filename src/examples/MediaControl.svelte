<script lang="ts">
	import { createMediaControl } from "@hooks/SvelteMediaControl.svelte";

	const {
		refTargetElement,
		paused,
		muted,
		wait,
		pitch,

		duration,
		time,
		progress,
		volume,
		speed,
		buffers,

		play,
		pause,
		changeTime,
		mute,
		unmute,
		changeVolume,
		changeSpeed,
		changePitch,
	} = createMediaControl<HTMLVideoElement>();
</script>

<div class="mb-2">
	<div
		class="flex flex-col gap-4 p-4 border border-zinc-700 rounded-md bg-zinc-900"
	>
		<video
			use:refTargetElement
			class="block w-full aspect-video"
			poster="../../BigBuckBunny_640x360.png"
			src="https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_640x360.m4v"
			controls
		>
			<track
				default
				kind="captions"
				srcLang="en"
				src="../../BigBuckBunny_caption.vtt"
			/>
		</video>
		<div class="flex flex-col justify-center items-center gap-2">
			<div
				class="flex flex-row justify-start gap-2 text-xs uppercase tabular-nums"
			>
				<div>Wait ({$wait})</div>
				<div>Buffers ({$buffers.length})</div>
			</div>
			<div
				class="flex flex-row justify-start gap-2 text-xs uppercase tabular-nums"
			>
				<div>Duration ({$duration.toFixed()})</div>
				<div>Time ({$time.toFixed()})</div>
				<div>Progress ({$progress.toFixed()}%)</div>
			</div>
			<div class="flex flex-row justify-center items-center gap-2">
				<button
					class="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 disabled:opacity-50 rounded bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-700 disabled:bg-zinc-700 disabled:cursor-not-allowed"
					onclick={() => {
						changeTime($time - 5);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="w-4 h-4"
					>
						<path
							d="M8.5 4.75a.75.75 0 0 0-1.107-.66l-6 3.25a.75.75 0 0 0 0 1.32l6 3.25a.75.75 0 0 0 1.107-.66V8.988l5.393 2.921A.75.75 0 0 0 15 11.25v-6.5a.75.75 0 0 0-1.107-.66L8.5 7.013V4.75Z"
						/>
					</svg>
					Seek -5
				</button>
				<button
					class="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 disabled:opacity-50 rounded bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-700 disabled:bg-zinc-700 disabled:cursor-not-allowed"
					onclick={() => {
						if ($paused) {
							play();
						} else {
							pause();
						}
					}}
				>
					{#if $paused}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="w-4 h-4"
						>
							<path
								d="M3 3.732a1.5 1.5 0 0 1 2.305-1.265l6.706 4.267a1.5 1.5 0 0 1 0 2.531l-6.706 4.268A1.5 1.5 0 0 1 3 12.267V3.732Z"
							/>
						</svg>
						Play
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="w-4 h-4"
						>
							<path
								d="M4.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-1ZM10.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-1Z"
							/>
						</svg>
						Pause
					{/if}
				</button>
				<button
					class="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 disabled:opacity-50 rounded bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-700 disabled:bg-zinc-700 disabled:cursor-not-allowed"
					onclick={() => {
						changeTime($time + 5);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="w-4 h-4"
					>
						<path
							d="M2.53 3.956A1 1 0 0 0 1 4.804v6.392a1 1 0 0 0 1.53.848l5.113-3.196c.16-.1.279-.233.357-.383v2.73a1 1 0 0 0 1.53.849l5.113-3.196a1 1 0 0 0 0-1.696L9.53 3.956A1 1 0 0 0 8 4.804v2.731a.992.992 0 0 0-.357-.383L2.53 3.956Z"
						/>
					</svg>
					Seek +5
				</button>
			</div>
			<div
				class="flex flex-row justify-start gap-2 text-xs uppercase tabular-nums"
			>
				<div>Volume ({$volume.toFixed()}%)</div>
			</div>
			<div class="flex grow flex-row justify-center items-center gap-2">
				<button
					class="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 disabled:opacity-50 rounded bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-700 disabled:bg-zinc-700 disabled:cursor-not-allowed"
					onclick={() => {
						changeVolume($volume - 5);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="w-4 h-4"
					>
						<path
							d="M7.557 2.066A.75.75 0 0 1 8 2.75v10.5a.75.75 0 0 1-1.248.56L3.59 11H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.59l3.162-2.81a.75.75 0 0 1 .805-.124ZM12.95 3.05a.75.75 0 1 0-1.06 1.06 5.5 5.5 0 0 1 0 7.78.75.75 0 1 0 1.06 1.06 7 7 0 0 0 0-9.9Z"
						/>
						<path
							d="M10.828 5.172a.75.75 0 1 0-1.06 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 1 0 1.06 1.06 4 4 0 0 0 0-5.656Z"
						/>
					</svg>
					Volume -5
				</button>
				<button
					class="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 disabled:opacity-50 rounded bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-700 disabled:bg-zinc-700 disabled:cursor-not-allowed"
					onclick={() => {
						if ($muted) {
							unmute();
						} else {
							mute();
						}
					}}
				>
					{#if $muted}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="w-4 h-4"
						>
							<path
								d="M7.557 2.066A.75.75 0 0 1 8 2.75v10.5a.75.75 0 0 1-1.248.56L3.59 11H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.59l3.162-2.81a.75.75 0 0 1 .805-.124ZM12.95 3.05a.75.75 0 1 0-1.06 1.06 5.5 5.5 0 0 1 0 7.78.75.75 0 1 0 1.06 1.06 7 7 0 0 0 0-9.9Z"
							/>
							<path
								d="M10.828 5.172a.75.75 0 1 0-1.06 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 1 0 1.06 1.06 4 4 0 0 0 0-5.656Z"
							/>
						</svg>
						Unmute
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="w-4 h-4"
						>
							<path
								d="M7.557 2.066A.75.75 0 0 1 8 2.75v10.5a.75.75 0 0 1-1.248.56L3.59 11H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.59l3.162-2.81a.75.75 0 0 1 .805-.124ZM11.28 5.72a.75.75 0 1 0-1.06 1.06L11.44 8l-1.22 1.22a.75.75 0 1 0 1.06 1.06l1.22-1.22 1.22 1.22a.75.75 0 1 0 1.06-1.06L13.56 8l1.22-1.22a.75.75 0 0 0-1.06-1.06L12.5 6.94l-1.22-1.22Z"
							/>
						</svg>
						Mute
					{/if}
				</button>
				<button
					class="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 disabled:opacity-50 rounded bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-700 disabled:bg-zinc-700 disabled:cursor-not-allowed"
					onclick={() => {
						changeVolume($volume + 5);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="w-4 h-4"
					>
						<path
							d="M7.557 2.066A.75.75 0 0 1 8 2.75v10.5a.75.75 0 0 1-1.248.56L3.59 11H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.59l3.162-2.81a.75.75 0 0 1 .805-.124ZM12.95 3.05a.75.75 0 1 0-1.06 1.06 5.5 5.5 0 0 1 0 7.78.75.75 0 1 0 1.06 1.06 7 7 0 0 0 0-9.9Z"
						/>
						<path
							d="M10.828 5.172a.75.75 0 1 0-1.06 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 1 0 1.06 1.06 4 4 0 0 0 0-5.656Z"
						/>
					</svg>
					Volume +5
				</button>
			</div>

			<div
				class="flex flex-row justify-start gap-2 text-xs uppercase tabular-nums"
			>
				<div>Speed ({`${$speed}x`})</div>
			</div>
			<div class="flex grow flex-row justify-center items-center gap-2">
				<button
					class="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 disabled:opacity-50 rounded bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-700 disabled:bg-zinc-700 disabled:cursor-not-allowed"
					disabled={$speed === 0.25}
					onclick={() => {
						changeSpeed($speed - 0.25);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="w-4 h-4"
					>
						<path
							fill-rule="evenodd"
							d="M9.58 1.077a.75.75 0 0 1 .405.82L9.165 6h4.085a.75.75 0 0 1 .567 1.241l-6.5 7.5a.75.75 0 0 1-1.302-.638L6.835 10H2.75a.75.75 0 0 1-.567-1.241l6.5-7.5a.75.75 0 0 1 .897-.182Z"
							clip-rule="evenodd"
						/>
					</svg>
					Speed -0.25
				</button>
				<button
					class="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 disabled:opacity-50 rounded bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-700 disabled:bg-zinc-700 disabled:cursor-not-allowed"
					onclick={() => {
						changePitch(!$pitch);
					}}
				>
					{#if $pitch}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="w-4 h-4"
						>
							<path
								fill-rule="evenodd"
								d="M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Zm1.627.566 7.707 7.707a5.501 5.501 0 0 0-7.707-7.707Zm6.646 8.768L3.616 4.677a5.501 5.501 0 0 0 7.707 7.707Z"
								clip-rule="evenodd"
							/>
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="w-4 h-4"
						>
							<path
								fill-rule="evenodd"
								d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
								clip-rule="evenodd"
							/>
						</svg>
					{/if}
					Pitch
				</button>
				<button
					class="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 disabled:opacity-50 rounded bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-700 disabled:bg-zinc-700 disabled:cursor-not-allowed"
					disabled={$speed === 4.0}
					onclick={() => {
						changeSpeed($speed + 0.25);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="w-4 h-4"
					>
						<path
							fill-rule="evenodd"
							d="M9.58 1.077a.75.75 0 0 1 .405.82L9.165 6h4.085a.75.75 0 0 1 .567 1.241l-6.5 7.5a.75.75 0 0 1-1.302-.638L6.835 10H2.75a.75.75 0 0 1-.567-1.241l6.5-7.5a.75.75 0 0 1 .897-.182Z"
							clip-rule="evenodd"
						/>
					</svg>
					Speed +0.25
				</button>
			</div>
			<div class="flex flex-col text-blue-400 text-center underline">
				<a href="https://studio.blender.org/films/big-buck-bunny/">
					Big Buck Bunny by Blender Foundation
				</a>
				<a href="https://creativecommons.org/licenses/by/3.0/">
					Creative Commons Attribution 3.0
				</a>
			</div>
		</div>
	</div>
</div>
