import React, { useState } from "react";
import "./CustomControls.css";
import ProgressBar from "./Progressbar";
import FsOnImg from "../assets/fullscreen-enter-16.png";
import FsOffImg from "../assets/fullscreen-exit-16.png";
const CustomControls = ({
	displayButton,
	handlePlayPause,
	video,
	container,
	toggleHandler,
	captionToggle,
}) => {
	const [fullScreen, setFullScreen] = useState(false);
	const [speed, setSpeed] = useState("1x");
	const timeElapsed = document.getElementById("time-elapsed");
	// formatTime takes a time length in seconds and returns the time in
	// minutes and seconds
	function formatTime(timeInSeconds) {
		const result = new Date(timeInSeconds * 1000)
			.toISOString()
			.substr(11, 8);

		return {
			minutes: result.substr(3, 2),
			seconds: result.substr(6, 2),
		};
	}

	// initializeVideo sets the video duration, and maximum value of the
	// progressBar
	let videoDuration = video.duration;
	const time = formatTime(videoDuration);

	// updateTimeElapsed indicates how far through the video
	// the current playback is
	function updateTimeElapsed() {
		const time = formatTime(Math.floor(video.currentTime));
		timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
		timeElapsed.setAttribute(
			"datetime",
			`${time.minutes}m ${time.seconds}s`
		);
	}
	video.addEventListener("timeupdate", updateTimeElapsed);

	let fullscreen = document.getElementById("fullscreen");

	function toggleFullScreen() {
		setFullScreen(!fullScreen);
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else if (document.webkitFullscreenElement) {
			// Need this to support Safari
			document.webkitExitFullscreen();
		} else if (container.webkitRequestFullscreen) {
			// Need this to support Safari
			container.webkitRequestFullscreen();
		} else {
			container.requestFullscreen();
		}
	}

	const handleSpeed = () => {
		if (speed == "1x") {
			setSpeed("1.5x");
			video.playbackRate = 1.5;
		} else if (speed == "1.5x") {
			setSpeed("2x");
			video.playbackRate = 2;
		} else if (speed == "2x") {
			setSpeed("1x");
			video.playbackRate = 1;
		}
	};
	return (
		<>
			<div className="btns-3-and-vid-durn">
				<div class="time">
					<time id="time-elapsed">00:00</time>
					<span> / </span>
					<time id="duration">
						{time.minutes}:{time.seconds}
					</time>
				</div>
				<button
					onClick={toggleHandler}
					className={`btn ${
						captionToggle ? "btn-light" : "btn-dark"
					} btn-sm bt1`}
				>
					CC
				</button>
				<button
					onClick={handleSpeed}
					className={`btn ${
						speed == "1x" ? "btn-dark" : "btn-light"
					} btn-sm bt2`}
				>
					{speed}
				</button>
				<button
					id="fullscreen"
					onClick={toggleFullScreen}
					className="btn btn-dark btn-sm bt3 "
				>
					{fullScreen ? (
						<img src={FsOffImg} />
					) : (
						<img src={FsOnImg} />
					)}
				</button>
			</div>
			<ProgressBar video={video} />
			<div className="play-button-container">
				<button
					title="Play"
					className={`play-button-controls ${
						displayButton ? "show" : "hide"
					}`}
					onClick={handlePlayPause}
				>
					<svg
						className="my-svg"
						width="96px"
						height="96px"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							clip-rule="evenodd"
							d="M48 96c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48z"
							fill="#fff"
							fill-rule="evenodd"
						></path>
						<path
							clip-rule="evenodd"
							d="M37.326 33.822c0-2.408 2.695-3.835 4.687-2.481l20.862 14.178c1.752 1.19 1.752 3.772 0 4.963L42.013 64.66c-1.992 1.354-4.687-.072-4.687-2.48V33.821z"
							fill="#000"
							fill-rule="evenodd"
						></path>
					</svg>
				</button>
			</div>
		</>
	);
};

export default CustomControls;
