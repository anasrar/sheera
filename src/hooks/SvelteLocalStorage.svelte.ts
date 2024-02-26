import { onMount } from "svelte";
import { writable } from "svelte/store";

export function createLocalStorage(
	key: string,
	defaultValue: string,
	sync: boolean = false,
) {
	const value = writable(window.localStorage.getItem(key) ?? defaultValue);

	const setter = (newValue: string) => {
		window.localStorage.setItem(key, newValue);
		value.set(newValue);
	};

	onMount(() => {
		const storage = (event: StorageEvent) => {
			if (event.key === key) {
				value.set(event.newValue ?? defaultValue);
			}
		};

		if (sync) {
			window.addEventListener("storage", storage);
		}

		return () => {
			if (sync) {
				window.removeEventListener("storage", storage);
			}
		};
	});

	return [value, setter] as const;
}
