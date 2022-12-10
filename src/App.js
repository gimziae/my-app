import { useState } from "react";
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

function App() {
	const nameArr = ["ava", "beyonce", "crystal", "didi"];
	const pororoObjArr = [
		{
			name: "뽀로로",
			age: 5,
			nickName: "사고뭉치",
		},
		{
			name: "루피",
			age: 4,
			nickName: "공주님",
		},
		{
			name: "크롱",
			age: 8,
			nickName: "장난꾸러기",
		},
	];

	return (
		<div className="App">
			<Comparing />
			<ChangeObj objArr={pororoObjArr} />
			{/* <MainHeader text="Hello, props world!!" /> */}
			{/* <MainHeader
				text="Go, naver"
				href="https://naver.com"
				userID="gimziae"
			/>
			<ClassProps name="김지애" age="23" nickName="쟤짱" />
			<CustomList arr={nameArr} />
			<CustomObj obj={propsObject} /> */}
			{/* <BtnToNaver />
			<Counter />
			<Img />
			<ClassState />
			<FunctionalState /> */}
		</div>
	);
}

export default App;
