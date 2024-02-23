import { onMount } from "svelte";
import { writable } from "svelte/store";

export function createSearchParam(key: string, defaultValue: string) {
	const value = writable(
		new URL(window.location.toString()).searchParams.get(key) ??
			defaultValue,
	);

	const setter = (newValue: string) => {
		const url = new URL(window.location.toString());

		url.searchParams.set(key, newValue);
		history.pushState({}, "", url);

		value.set(newValue);
	};

	onMount(() => {
		const popstate = () => {
			value.set(
				new URL(window.location.toString()).searchParams.get(key) ??
					defaultValue,
			);
		};

		window.addEventListener("popstate", popstate);

		return () => {
			window.removeEventListener("popstate", popstate);
		};
	});

	return [value, setter] as const;
}
