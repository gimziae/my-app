import React, { useEffect, useState, useRef } from "react";

export default function PracticeTimer() {
	const [render, setRender] = useState(false);
	const time = useRef(0); // useRef를 변수처럼 사용하고 싶으면 .current 를 붙혀줘야 한다.

	useEffect(() => {
		const timer = setInterval(() => {
			// 1초마다 값 1씩 추가해준다.
			time.current += 1;
			console.log(time.current);
		}, 1000);

		// 클린업 (언마운트 시 멈추는 코드)
		return () => clearInterval(timer);
	}, []);

	const showTime = () => {
		// 컴포넌트 리렌더링 시!
		setRender(!render);
	};

	return (
		<>
			<h1>{time.current}</h1>
			{/* 버튼이 클릭 시에만 리렌더링 시켜준다. */}
			<button onClick={showTime}>시간</button>
		</>
	);
}
