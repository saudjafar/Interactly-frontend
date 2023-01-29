import React, { useState, useEffect, useRef } from "react";
import CustomControls from "./CustomControls";
import "./CustomVideoPlayer.css";

const CustomVideoPlayer = ({ videoSrc, overlayText, Subtitles }) => {
	const video = document.getElementById("video");
	const [videoTime, setVideoTime] = useState(0);
	const [showOverlay, setShowOverlay] = useState(true);
	const [hideOverlay, sethideOverlay] = useState(false);
	const [displayButton, setDisplayButton] = useState(false);
	const [captionToggle, setCaptionToggle] = useState(true);

	const videoRef = useRef(null);
	let timeoutId;
	const handleTimeUpdate = () => {
		const video = document.getElementById("video");
		setVideoTime(video.currentTime);

		if (video.currentTime >= 1) {
			setShowOverlay(false);
			timeoutId = setTimeout(() => {
				sethideOverlay(true);
			}, 250);
		} else {
			sethideOverlay(false);
			setShowOverlay(true);
			clearTimeout(timeoutId);
		}

		if (video.currentTime === video.duration) {
			setDisplayButton(true);
		}
	};

	const handlePlayPause = () => {
		if (videoRef.current.paused) {
			videoRef.current.play();
			setDisplayButton(false);
		} else {
			videoRef.current.pause();
			setDisplayButton(true);
		}
	};
	const toggleHandler = () => {
		setCaptionToggle(!captionToggle);
	};
	useEffect(() => {
		if (!showOverlay) {
			const timeoutId = setTimeout(() => {
				sethideOverlay(true);
			}, 500);
			return () => clearTimeout(timeoutId);
		}
	}, [showOverlay]);

	useEffect(() => {
		if (videoTime >= 1) {
			setShowOverlay(false);
		} else {
			setShowOverlay(true);
		}
	}, [videoTime]);

	const container = document.getElementById("container");

	return (
		<div
			id="container"
			className="container-class"
		>
			{!hideOverlay && (
				<div
					className={`overlay-div ${!showOverlay ? "hide" : ""}`}
					onClick={handlePlayPause}
				></div>
			)}
			{!hideOverlay && (
				<p className={`welcome-text ${!showOverlay ? "hide" : ""}`}>
					{overlayText}
				</p>
			)}

			<video
				controlsList="nodownload"
				ref={videoRef}
				className="video-class"
				id="video"
				onTimeUpdate={handleTimeUpdate}
				src={videoSrc}
				autoPlay
				playsInline
				onClick={handlePlayPause}
			>
				{captionToggle ? (
					<track
						src={Subtitles}
						label="English"
						kind="captions"
						srclang="en-us"
						default
					/>
				) : null}
			</video>
			<CustomControls
				className="custom-controls"
				displayButton={displayButton}
				handlePlayPause={handlePlayPause}
				video={video}
				container={container}
				toggleHandler={toggleHandler}
				captionToggle={captionToggle}
			/>
		</div>
	);
};

export default CustomVideoPlayer;
