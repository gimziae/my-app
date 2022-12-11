import React, { useRef, useState } from "react";

export default function CalcAnswer() {
	// 랜덤으로 숫자 두개 생성
	const firstRandomNum = Math.floor(Math.random() * (10 - 1) + 1);
	const secondRandomNum = Math.floor(Math.random() * (10 - 1) + 1);
	// 랜덤으로 연산자 생성
	const arithmetic = Math.floor(Math.random() * 3);
	const arithmeticArr = ["+", "-", "x"];

	// 연산 값 미리 지정해주기
	let answer = 0;
	if (arithmetic === 0) answer = firstRandomNum + secondRandomNum;
	else if (arithmetic === 1) answer = firstRandomNum - secondRandomNum;
	else answer = firstRandomNum * secondRandomNum;

	// 받는 인풋값
	const inputVal = useRef();

	// 스테이트 값 변경(새로 리로드)
	const [again, setAgain] = useState(false);

	// 제출이벤트
	const submitAnswer = () => {
		if (Number(inputVal.current.value) === answer) {
			alert("정답입니다!!");
			inputVal.current.focus();
			inputVal.current.value = "";
			setAgain(!again); // 리랜더링 해주는 컴포넌트
		} else {
			alert("틀렸습니다. 다시 입력해 주세요!");
			inputVal.current.focus();
			inputVal.current.value = "";
		}
	};

	return (
		<>
			<h1>
				{firstRandomNum}
				{arithmeticArr[arithmetic]}
				{secondRandomNum}
			</h1>
			<input type="text" ref={inputVal} />
			<button onClick={submitAnswer}>정답 제출!</button>
		</>
	);
}
