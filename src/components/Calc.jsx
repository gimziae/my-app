import React, { useRef, useState } from "react";

export default function Calc() {
	// 랜덤으로 숫자 두개 생성
	const first = Math.floor(Math.random() * (10 - 1) + 1);
	const second = Math.floor(Math.random() * (10 - 1) + 1);

	// 랜덤으로 연산자 생성
	const operatorArr = ["+", "-", "X"];
	const randomOp =
		operatorArr[Math.floor(Math.random() * operatorArr.length)];

	// 받는 인풋값
	const inputVal = useRef();

	// const result = first + second;
	// console.log(result);

	// 제출이벤트
	const submit = () => {
		if (randomOp === "+") {
			let result = first + second;
			if (result === inputVal) {
				alert("정답입니다!");
				inputVal.current.focus();
				inputVal.current.value = "";
				window.reload();
			} else {
				alert("틀렸습니다!");
				inputVal.current.focus();
				inputVal.current.value = "";
			}
		} else if (randomOp === "-") {
			let result = first - second;
			if (result === inputVal) {
				alert("정답입니다!");
				inputVal.current.focus();
				inputVal.current.value = "";
				window.reload();
			} else {
				alert("틀렸습니다!");
				inputVal.current.focus();
				inputVal.current.value = "";
			}
		} else if (randomOp === "*") {
			let result = first * second;
			if (result === inputVal) {
				alert("정답입니다!");
				inputVal.current.focus();
				inputVal.current.value = "";
				window.reload();
			} else {
				alert("틀렸습니다!");
				inputVal.current.focus();
				inputVal.current.value = "";
			}
		}
	};

	return (
		<>
			<span>{first}</span>
			<span>{randomOp}</span>
			<span>{second}</span>

			<br />
			<input ref={inputVal} />
			<button onClick={submit}>정답 제출!</button>
		</>
	);
}
