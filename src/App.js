import "./App.css";
import "./components/form.css";
import React from "react";
import { useState, useEffect } from "react";
import Main from "./components/Main";
import Oac from "./components/Oac";
import Ob from "./components/Ob";
function App() {
	const [displayedComponent, setDisplayedComponent] = useState("main");

	useEffect(() => {
		setDisplayedComponent("main");
	}, []);

	const handleOacButtonClick = () => {
		setDisplayedComponent("oac");
	};

	const handleObButtonClick = () => {
		setDisplayedComponent("ob");
	};
	return (
		<div>
			{displayedComponent === "main" && (
				<Main
					handleOacButtonClick={handleOacButtonClick}
					handleObButtonClick={handleObButtonClick}
				/>
			)}
			{displayedComponent === "oac" && <Oac />}
			{displayedComponent === "ob" && <Ob />}
		</div>
	);
}

export default App;
