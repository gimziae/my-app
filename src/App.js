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

function App() {
	// const nameArr = ["ava", "beyonce", "crystal", "didi"];
	// const pororoObjArr = [
	// 	{
	// 		name: "뽀로로",
	// 		age: 5,
	// 		nickName: "사고뭉치",
	// 	},
	// 	{
	// 		name: "루피",
	// 		age: 4,
	// 		nickName: "공주님",
	// 	},
	// 	{
	// 		name: "크롱",
	// 		age: 8,
	// 		nickName: "장난꾸러기",
	// 	},
	// ];
	// const [condition, setCondition] = useState("1번");
	// const num = condition;

	// const onChange = () => {
	// 	condition === "1번" ? setCondition("2번") : setCondition("1번");
	// };
	const showBtn = useRef();
	const [show, setShow] = useState(false);

	// 최초 실행 시 포커스
	useEffect(() => {
		showBtn.current.focus();
	}, []);

	return (
		<div className="App">
			<UseEffectFetch />
			{show && <PracticeTimer />}
			<button onClick={() => setShow(!show)} ref={showBtn}>
				{show ? "숨기기" : "보이기"}
			</button>
			{/* = 위와 같음 
			{!show ? (
				<button onClick={() => setShow(!show)} ref={showBtn}>
					보이기
				</button>
			) : (
				<button onClick={() => setShow(!show)}>숨기기</button>
			)} */}

			{/* <TestUseEffect /> */}
			{/* {condition !== "1번" ? (
				<PractiecOne index={num} />
			) : (
				<PracticeTwo index={num} />
			)}

			<button onClick={onChange}>{condition}</button> */}

			{/* 조건부 렌더링 && */}
			{/** 
			{conditionRender} 변수로 설정해서 해도 됨~! 
			{condition !== "1번" ? (
				<ConditionalRender />
			) : (
				<ConditionalRender2 />
			)}
			*/}
			{/* 
			<table border="1">
				<tbody>
					<tr>
						<td>1</td>
						<td>2</td>
						<td>3</td>
					</tr>
					<tr>
						<TableColum />
					</tr>
				</tbody>
			</table>
			<ReactFragment />
			<CalcAnswer />
			<Calc />
			<RefDOM />
			<ChangeFocus />
			<TestRef />
			<Comparing />
			<ChangeObj objArr={pororoObjArr} />
			<MainHeader text="Hello, props world!!" />
			<MainHeader
				text="Go, naver"
				href="https://naver.com"
				userID="gimziae"
			/>
			<ClassProps name="김지애" age="23" nickName="쟤짱" />
			<CustomList arr={nameArr} />
			<CustomObj obj={propsObjArr} />
			<BtnToNaver />
			<Counter />
			<Img />
			<ClassState />
			<FunctionalState /> 
			*/}
		</div>
	);
}

export default App;
