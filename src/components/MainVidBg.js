import React from "react";
import "./MainVidBG.css";
const MainVidBg = ({ videoSrc, handlePlayButtonClick, overlayText }) => {
	return (
		<>
			<div
				className="overlay-div"
				onClick={handlePlayButtonClick}
			></div>
			<button
				className="play-button"
				title="Play"
				onClick={handlePlayButtonClick}
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
			<p className="welcome-text">{overlayText}</p>
			<video
				className="video-class"
				id="video"
				src={videoSrc}
				autoPlay
				playsInline
				muted
				loop
			/>
		</>
	);
};

export default MainVidBg;
