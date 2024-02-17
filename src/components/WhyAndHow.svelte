<script lang="ts">
	import { onMount } from "svelte";

	let modal = $state<HTMLDialogElement>();

	onMount(() => {
		modal?.addEventListener("click", (event) => {
			const target = event.currentTarget as HTMLDialogElement;
			if (target === modal) {
				const { x, y, width, height } = target.getBoundingClientRect();
				const { clientX, clientY } = event;
				const inside =
					x <= clientX &&
					clientX <= x + width &&
					y <= clientY &&
					clientY <= y + height;
				if (!inside) {
					modal.close();
				}
			}
		});
	});
</script>

<button
	class="inline-flex flex-row items-center gap-1"
	onclick={() => {
		modal?.showModal();
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
			d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-6 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.293 5.293a1 1 0 1 1 .99 1.667c-.459.134-1.033.566-1.033 1.29v.25a.75.75 0 1 0 1.5 0v-.115a2.5 2.5 0 1 0-2.518-4.153.75.75 0 1 0 1.061 1.06Z"
			clip-rule="evenodd"
		></path>
	</svg>
	Why and How
</button>

<dialog
	bind:this={modal}
	class="relative w-auto p-4 max-w-lg mx-2 md:mx-auto mb-2 md:mb-auto border border-zinc-700 rounded-md text-zinc-200 bg-zinc-900 text-start"
>
	<button
		class="absolute top-4 right-4 inline-flex justify-center items-center p-1 rounded bg-zinc-700 hover:bg-zinc-600"
		onclick={() => {
			modal?.close();
		}}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			fill="currentColor"
			class="w-4 h-4"
		>
			<path
				d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"
			/>
		</svg>
	</button>
	<section aria-label="Why">
		<h3 class="font-semibold text-lg">Why</h3>
		<p class="mt-1 font-normal text-pretty">
			Too lazy rewrite hook every new project or find the old one and I
			don't want to make npm package.
		</p>
	</section>
	<section aria-label="How">
		<h3 class="mt-3 font-semibold text-lg">How</h3>
		<p class="mt-1 font-normal text-pretty">
			Just copy and paste the code, feels natural for programmer.
		</p>
	</section>
</dialog>

<style lang="scss">
	::backdrop {
		background: rgb(24 24 27 / 0.5);
		backdrop-filter: blur(3px);
	}
</style>
