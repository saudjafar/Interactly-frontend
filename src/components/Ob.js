import React, { useState } from "react";
import Form from "./Form";
import SecondVid from "../assets/second.mp4";
import CustomVideoPlayer from "./CustomVideoPlayer";
import Subtitles from "../assets/second.vtt";
const Ob = () => {
	const [showForm, setShowForm] = useState(false);
	const overlayText = "Funnel 3: Webinar sign up";
	return (
		<div className="App">
			<div className="left-half">
				<CustomVideoPlayer
					videoSrc={SecondVid}
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
						Sign up for free webinar
					</button>
				)}
				{showForm && <Form />}
			</div>
		</div>
	);
};

export default Ob;
