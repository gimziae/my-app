import { useState, useRef, useEffect } from "react";
import "./App.css";
import Dialog from "./components/Dialog";
import FancyBoarder from "./components/FancyBoarder";
import WelcomeDialog from "./components/WelcomeDialog";

function App() {
	return (
		<div className="App">
			<FancyBoarder color="blue">
				<h1>안녕 나는 props.children 이야</h1>
				<h1>안녕 나는 props.children 이야</h1>
				<p>이건 매우 유용해!!</p>
			</FancyBoarder>
		</div>
	);
}

export default App;
