import { useRef, useState } from "react";

function Comparing() {
	const [countState, setCountState] = useState(0);
	const countRef = useRef(0);
	let countVar = 0;

	const [render, setRender] = useState(0);

	const countUpState = () => {
		setCountState(countState + 1);
		console.log(`State:${countState}`);
	};
	const countUpRef = () => {
		countRef.current += 1;

		console.log(`Ref:${countRef.current}`);
	};
	const countUpVar = () => {
		countVar += 1;
		console.log(`Variable:${countVar}`);
	};
	const reRender = () => {
		setRender(render + 1);
		console.log(`reRender:${render}`);
	};

	// state는 바로 반영
	// ref는 컴포넌트가 렌더린 되지 않으면 즉시 반영은 안되지만 값은 저장해두고 있다!
	// > 그래서
	// variable 은 리렌더링이 되면 초기값으로 다시 설정된다.
	return (
		<div>
			<h1>State:{countState}</h1>
			<h1>Ref:{countRef.current}</h1>
			<h1>variable:{countVar}</h1>
			<button onClick={countUpState}>State +</button>
			<button onClick={countUpRef}>Ref +</button>
			<button onClick={countUpVar}>Var +</button>
			<button onClick={reRender}>렌더링!!</button>
		</div>
	);
}

export default Comparing;
