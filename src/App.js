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
import logo from "./img/cake.jpeg";
import styled, { keyframes } from "styled-components";

const AppLogoSpin = keyframes`
from {
	transform: rotate(0deg);
}
to {
	transform: rotate(360deg);
}
`;

const RootDiv = styled.div`
	text-align: center;
`;
const AppHeader = styled.header`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;
const AppLogo = styled.img`
	height: 40vmin;
	pointer-events: none;
	border-radius: 50%;
	animation: ${AppLogoSpin} infinite 20s linear;
`;
const MyA = styled.a`
	color: #61dafb;
`;

function App() {
	return (
		<RootDiv>
			<AppHeader>
				<AppLogo src={logo} alt="app" />
				<p>
					Styled 적용을 위해 변경 된 <br />
					App.js Edit
					<code> src/App.js</code> and save to reload.{" "}
				</p>
				<MyA
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</MyA>
			</AppHeader>
		</RootDiv>
	);
}

export default App;
