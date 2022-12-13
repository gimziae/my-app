import { useState, useRef, useEffect } from "react";
import "./App.css";
import Dialog from "./components/Dialog";
import FancyBoarder from "./components/FancyBoarder";
import SignUpDialog from "./components/SignUpDialog";
import WelcomeDialog from "./components/WelcomeDialog";
import Comparing from "./components/Comparing";

function App() {
	return (
		<div className="App">
			<Dialog title="실습입니다!" message="🎉🎊⛄️"></Dialog>
		</div>
	);
}

export default App;
