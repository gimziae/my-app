import React, { useRef } from "react";

export default function RefDOM() {
	const orangeEl = useRef();
	const skyblueEl = useRef();
	const inputEl = useRef();

	const adjustCSS = () => {
		orangeEl.current.style.backgroundColor = "orange";
		skyblueEl.current.style.backgroundColor = "skyblue";
	};

	// **.current 까지 접근해야 돔요소에 접근 가능
	const clearInput = () => {
		inputEl.current.value = "";
	};

	return (
		<>
			<h1 ref={orangeEl}>ORANGE</h1>
			<h1 ref={skyblueEl}>SKYBLUE</h1>
			<input ref={inputEl} />
			<br />
			<button onClick={adjustCSS}>CSS 적용</button>
			<button onClick={clearInput}>input 초기화</button>
		</>
	);
}
