<script lang="ts">
	import { createCountdown } from "@hooks/SvelteCountdown.svelte";

	const { finish, paused, time, start, pause, resume, stop } =
		createCountdown();
</script>

<div class="mb-2">
	<div
		class="flex flex-col p-4 border border-zinc-700 rounded-md bg-zinc-900"
	>
		<div class="flex grow flex-col justify-center items-center gap-4">
			<button
				class="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 rounded disabled:opacity-50 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:bg-zinc-700 tabular-nums disabled:cursor-not-allowed"
				disabled={!$finish}
				onclick={() => {
					start(90);
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
						d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
						clip-rule="evenodd"
					/>
				</svg>
				Resend Code
				{#if !$finish}
					{new Date($time * 1000).toLocaleString("en-US", {
						minute: "2-digit",
						second: "2-digit",
					})}
				{/if}
			</button>
			<div class="flex grow flex-row justify-center items-center gap-2">
				<button
					class="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 disabled:opacity-50 rounded bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-700 disabled:bg-zinc-700 disabled:cursor-not-allowed"
					disabled={$finish || $paused}
					onclick={() => {
						pause();
					}}
				>
					Pause
				</button>
				<button
					class="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 disabled:opacity-50 rounded bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-700 disabled:bg-zinc-700 disabled:cursor-not-allowed"
					disabled={$finish || !$paused}
					onclick={() => {
						resume();
					}}
				>
					Resume
				</button>
				<button
					class="flex flex-row justify-center items-center gap-2 w-max px-2 py-1 disabled:opacity-50 rounded bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-700 disabled:bg-zinc-700 disabled:cursor-not-allowed"
					disabled={$finish}
					onclick={() => {
						stop();
					}}
				>
					Stop
				</button>
			</div>
		</div>
	</div>
</div>
