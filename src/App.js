import { useState, useRef, useEffect } from "react";
import "./App.css";
import Dialog from "./components/Dialog";
import FancyBoarder from "./components/FancyBoarder";
import SignUpDialog from "./components/SignUpDialog";
import WelcomeDialog from "./components/WelcomeDialog";

function App() {
	return (
		<div className="App">
			<FancyBoarder color="violet">
				<SignUpDialog />
			</FancyBoarder>
		</div>
	);
}

export default App;
