import { useEffect, useState } from "react";

export function useLocalStorage(
	key: string,
	defaultValue: string,
	sync: boolean = false,
) {
	const [value, setValue] = useState(
		window.localStorage.getItem(key) ?? defaultValue,
	);

	const setter = (newValue: string) => {
		window.localStorage.setItem(key, newValue);
		setValue(newValue);
	};

	useEffect(() => {
		const storage = (event: StorageEvent) => {
			if (event.key === key) {
				setValue(event.newValue ?? defaultValue);
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
	}, []);

	return [value, setter] as const;
}
