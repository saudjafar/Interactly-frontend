import React, { useRef } from "react";
import "./Progressbar.css";
const ProgressBar = ({ video }) => {
	const progressRef = useRef(null);

	const handleSeek = (e) => {
		console.log(e.clientX);
		const newTime =
			(e.clientX / progressRef.current.offsetWidth) * video.duration;
		video.currentTime = newTime;
	};
	return (
		<div
			className="seekbar-container"
			onClick={handleSeek}
			ref={progressRef}
		>
			<div
				className=" seekbar"
				style={{
					width: `${
						video ? (video.currentTime / video.duration) * 100 : 0
					}%`,
				}}
			></div>
		</div>
	);
};

export default ProgressBar;
