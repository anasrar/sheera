import { get, writable } from "svelte/store";

export function createCountdown() {
	const finish = writable(true);
	const time = writable(0);
	const paused = writable(false);

	const intervalId = writable(0);

	const start = (seconds: number) => {
		finish.set(false);
		time.set(seconds);
		paused.set(false);
		intervalId.set(
			setInterval(() => {
				const result = get(time) - 1;
				if (result === 0) {
					finish.set(true);
					paused.set(false);
					clearInterval(get(intervalId));
				}
				time.set(result);
			}, 1000),
		);
	};

	const pause = () => {
		paused.set(true);
		clearInterval(get(intervalId));
	};

	const resume = () => {
		start(get(time));
	};

	const stop = () => {
		finish.set(true);
		time.set(0);
		paused.set(false);
		clearInterval(get(intervalId));
	};

	return {
		finish,
		paused,
		time,
		start,
		pause,
		resume,
		stop,
	};
}
