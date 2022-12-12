import { useState, useRef, useEffect } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import BtnToNaver from "./components/BtnToNaver";
import Counter from "./components/Counter";
import Img from "./components/Img";
import ClassState from "./components/ClassState";
import FunctionalState from "./components/FunctionalState";
import ClassProps from "./components/ClassProps";
import CustomList from "./components/CustomList";
import CustomObj from "./components/CustomObj";
import ChangeObj from "./components/ChangeObj";
import Comparing from "./components/Comparing";
import TestRef from "./components/TestRef";
import ChangeFocus from "./components/ChangeFocus";
import RefDOM from "./components/RefDOM";
import Calc from "./components/Calc";
import CalcAnswer from "./components/CalcAnswer";
import ReactFragment from "./components/ReactFragment";
import TableColum from "./components/TableColum";
import ConditionalRender from "./components/ConditionalRender";
import ConditionalRender2 from "./components/ConditionalRender2";
import PractiecOne from "./components/PractiecOne";
import PracticeTwo from "./components/PracticeTwo";
import TestUseEffect from "./components/TestUseEffect";
import Timer from "./components/Timer";
import PracticeTimer from "./components/PracticeTimer";
import UseEffectFetch from "./components/UseEffectFetch";
import UsingUseMemo from "./components/UsingUseMemo";
import TestInlineCSS from "./components/TestInlineCSS";
import TestCssFile from "./components/TestCssFile";
import TestStyled from "./components/TestStyled";

function App() {
	return (
		<div className="App">
			<TestInlineCSS />
			<TestCssFile />
			<TestStyled />
		</div>
	);
}

export default App;
