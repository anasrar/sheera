import { useEffect, useState } from "react";

export function useSearchParam(key: string, defaultValue: string) {
	const [value, setValue] = useState(
		new URL(window.location.toString()).searchParams.get(key) ??
			defaultValue,
	);

	const setter = (newValue: string) => {
		const url = new URL(window.location.toString());

		url.searchParams.set(key, newValue);
		history.pushState({}, "", url);

		setValue(newValue);
	};

	useEffect(() => {
		const popstate = () => {
			setValue(
				new URL(window.location.toString()).searchParams.get(key) ??
					defaultValue,
			);
		};

		window.addEventListener("popstate", popstate);

		return () => {
			window.removeEventListener("popstate", popstate);
		};
	}, []);

	return [value, setter] as const;
}
