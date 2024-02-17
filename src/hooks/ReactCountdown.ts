import { useState } from "react";

export function useCountdown() {
	const [finish, setFinish] = useState(true);
	const [time, setTime] = useState(0);
	const [paused, setPaused] = useState(false);

	const [intervalId, setIntervalId] = useState(0);

	const start = (seconds: number) => {
		setFinish(false);
		setTime(seconds);
		setPaused(false);
		setIntervalId(
			setInterval(() => {
				setTime((currentTime) => {
					const result = currentTime - 1;
					if (result === 0) {
						setFinish(true);
						setPaused(false);
						clearInterval(intervalId);
					}

					return result;
				});
			}, 1000),
		);
	};

	const pause = () => {
		setPaused(true);
		clearInterval(intervalId);
	};

	const resume = () => {
		start(time);
	};

	const stop = () => {
		setFinish(true);
		setTime(0);
		setPaused(false);
		clearInterval(intervalId);
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
