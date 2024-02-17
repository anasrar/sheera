import { useEffect, useRef, useState } from "react";

export function useMediaControl<TElement extends HTMLMediaElement>() {
	const refTargetElement = useRef<TElement>(null);
	const [metadata, setMetadata] = useState(false);
	const [paused, setPaused] = useState(true);
	const [muted, setMuted] = useState(false);
	const [wait, setWait] = useState(false);
	const [pitch, setPitch] = useState(true);

	const [duration, setDuration] = useState(0);
	const [time, setTime] = useState(0);
	const [progress, setProgress] = useState(0);
	const [volume, setVolume] = useState(100);
	const [speed, setSpeed] = useState(1);
	const [buffers, setBuffers] = useState<[number, number][]>([]);

	useEffect(() => {
		const onLoadedMetadata = () => {
			setMetadata(true);
			onTimeUpdate();
		};
		const onDurationChange = () => {
			setDuration(refTargetElement.current!.duration);
		};
		onDurationChange();
		const onTimeUpdate = () => {
			const target = refTargetElement.current!;
			const { currentTime, duration } = target;
			setTime(currentTime);
			onDurationChange();
			setProgress((currentTime / duration) * 100);
		};
		const onPlay = () => {
			setPaused(false);
			setWait(false);
		};
		const onPause = () => {
			setPaused(true);
		};
		const onVolumeChange = () => {
			setMuted(refTargetElement.current?.muted ?? true);
			setVolume((refTargetElement.current?.volume ?? 1) * 100);
		};
		onVolumeChange();
		const onWaiting = () => {
			setWait(true);
		};
		const onRateChange = () => {
			setSpeed(refTargetElement.current?.playbackRate ?? 1);
		};
		onRateChange();
		const onProgress = () => {
			const bufferTotal = refTargetElement.current?.buffered.length ?? 0;
			const d = refTargetElement.current?.duration ?? 0;
			const result: typeof buffers = [];

			for (let i = 0; i < bufferTotal; i++) {
				result.push([
					(refTargetElement.current!.buffered.start(i) / d) * 100,
					(refTargetElement.current!.buffered.end(i) / d) * 100,
				]);
			}

			setBuffers(result);
		};

		refTargetElement.current?.addEventListener(
			"loadedmetadata",
			onLoadedMetadata,
		);
		refTargetElement.current?.addEventListener(
			"durationchange",
			onDurationChange,
		);
		refTargetElement.current?.addEventListener("timeupdate", onTimeUpdate);
		refTargetElement.current?.addEventListener("play", onPlay);
		refTargetElement.current?.addEventListener("playing", onPlay);
		refTargetElement.current?.addEventListener("pause", onPause);
		refTargetElement.current?.addEventListener(
			"volumechange",
			onVolumeChange,
		);
		refTargetElement.current?.addEventListener("waiting", onWaiting);
		refTargetElement.current?.addEventListener("ratechange", onRateChange);
		refTargetElement.current?.addEventListener("progress", onProgress);

		return () => {
			refTargetElement.current?.removeEventListener(
				"loadedmetadata",
				onLoadedMetadata,
			);
			refTargetElement.current?.removeEventListener(
				"durationchange",
				onDurationChange,
			);
			refTargetElement.current?.removeEventListener(
				"timeupdate",
				onTimeUpdate,
			);
			refTargetElement.current?.removeEventListener("play", onPlay);
			refTargetElement.current?.removeEventListener("playing", onPlay);
			refTargetElement.current?.removeEventListener("pause", onPause);
			refTargetElement.current?.removeEventListener(
				"volumechange",
				onVolumeChange,
			);
			refTargetElement.current?.removeEventListener("waiting", onWaiting);
			refTargetElement.current?.removeEventListener(
				"ratechange",
				onRateChange,
			);
			refTargetElement.current?.removeEventListener(
				"progress",
				onProgress,
			);
		};
	}, []);

	const play = () => {
		refTargetElement.current?.play();
	};

	const pause = () => {
		refTargetElement.current?.pause();
	};

	const changeTime = (seconds: number) => {
		if (refTargetElement.current) {
			refTargetElement.current.currentTime = Math.max(
				0,
				Math.min(seconds, duration),
			);
		}
	};

	const mute = () => {
		refTargetElement.current!.muted = true;
	};

	const unmute = () => {
		refTargetElement.current!.muted = false;
	};

	const changeVolume = (value: number) => {
		if (refTargetElement.current) {
			refTargetElement.current.volume = Math.max(
				0,
				Math.min(value / 100, 1),
			);
		}
	};

	const changeSpeed = (value: number) => {
		refTargetElement.current!.playbackRate = value;
	};

	const changePitch = (value: boolean) => {
		refTargetElement.current!.preservesPitch = value;
		setPitch(value);
	};

	return {
		refTargetElement,

		metadata,
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
	};
}
