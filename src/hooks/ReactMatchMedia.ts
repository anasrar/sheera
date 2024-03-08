import { useEffect, useState } from "react";

export function useMatchMedia(query: string) {
	const mql = window.matchMedia(query);
	const [value, setValue] = useState(mql.matches);

	useEffect(() => {
		const change = (event: MediaQueryListEvent) => {
			setValue(event.matches);
		};

		mql.addEventListener("change", change);

		return () => {
			mql.removeEventListener("change", change);
		};
	}, []);

	return value;
}
