import React, { useState } from "react";
import MainVid from "../assets/main.mp4";
import CustomVideoPlayer from "./CustomVideoPlayer";
import MainVidBg from "./MainVidBg";
import Subtitles from "../assets/main.vtt";

const Main = ({ handleOacButtonClick, handleObButtonClick }) => {
	const [displayBG, setDisplayBG] = useState("true");

	const handlePlayButtonClick = () => {
		setDisplayBG("false");
	};
	const overlayText = "Welcome";
	return (
		<div className="App">
			<div className="left-half">
				{displayBG === "true" && (
					<MainVidBg
						handlePlayButtonClick={handlePlayButtonClick}
						videoSrc={MainVid}
						overlayText={overlayText}
					/>
				)}
				{displayBG === "false" && (
					<CustomVideoPlayer
						videoSrc={MainVid}
						overlayText={overlayText}
						Subtitles={Subtitles}
					/>
				)}
			</div>
			<div className="right-half">
				<div className="btn-container">
					<button
						onClick={handleOacButtonClick}
						className="button-style"
						type="button"
					>
						<span class="ficfeq">A</span>
						<span class="dUoeBI">Campaign structure</span>
					</button>
					<button
						onClick={handleObButtonClick}
						className="button-style"
						type="button"
					>
						<span class="ficfeq">B</span>
						<span class="dUoeBI">Learn Facebook basics</span>
					</button>
					<button
						onClick={handleOacButtonClick}
						className="button-style"
						type="buttton"
					>
						<span class="ficfeq">C</span>
						<span class="dUoeBI">3rd choice</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Main;
