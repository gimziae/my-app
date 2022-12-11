import { useState, useRef } from "react";

export default function TestRef() {
	let [text, setText] = useState("안녕하세여!");

	const inputValue = useRef();
	const onChangeText = (e) => {
		const inputText = inputValue.current.value; // 인풋에 변화되는 값 (target -> DOM 요소)
		setText(inputText);
	};

	return (
		<>
			<h1>{text}</h1> {/* 초기 스테이트 값 지정 */}
			<input
				ref={inputValue}
				onChange={(e) => {
					onChangeText();
				}}></input>
		</>
	);
}
