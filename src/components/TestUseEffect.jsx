import React, { useEffect, useRef, useState } from "react";

export default function TestUseEffect() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState("입력하쇼");
	const inputText = useRef();

	const onButtonClick = () => {
		console.log("🎉 버튼 클릭");
		setCount(count + 1);
	};

	const onInputChange = () => {
		console.log("💻 키 입력");
		setText(inputText.current.value);
	};

	useEffect(() => {
		console.log("💾 최초 마운트 시에만 실행되는 코드 💾");
	}, []);
	useEffect(() => {
		console.log("🎈 랜더링 할 때 마다 실행되는 useEffect");
	});
	useEffect(() => {
		console.log("🕹 버튼 클릭 시에만 실행되는 useEffect");
	}, [count]);
	useEffect(() => {
		console.log("🖥 텍스트 입력 시에만 실행되는 useEffect");
	}, [text]);

	return (
		<>
			<h1>{count}</h1>

			<button onClick={onButtonClick}>+1 버튼</button>
			<br />
			<br />
			<br />
			<br />
			<input ref={inputText} onChange={onInputChange} />
			<h1>{text}</h1>
		</>
	);
}
