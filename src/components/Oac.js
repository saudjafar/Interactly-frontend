import React, { useState } from "react";
import Form from "./Form";
import FirstVid from "../assets/first.mp4";
import CustomVideoPlayer from "./CustomVideoPlayer";
import Subtitles from "../assets/first.vtt";
const Oac = () => {
	const [showForm, setShowForm] = useState(false);
	const overlayText = "Funnel 2: freebie or coaching";
	return (
		<div className="App">
			<div className="left-half">
				<CustomVideoPlayer
					videoSrc={FirstVid}
					overlayText={overlayText}
					Subtitles={Subtitles}
				/>
			</div>
			<div className="right-half">
				{!showForm && (
					<button
						type="button"
						className="button-style2"
						onClick={() => setShowForm(true)}
					>
						Download "Campaign Structure Guide"
					</button>
				)}
				{showForm && <Form />}
			</div>
		</div>
	);
};

export default Oac;
