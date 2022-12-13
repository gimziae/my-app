import React from "react";

export default function Dialog(props) {
	return (
		// 기본이 되는 컴포넌트를 만들어두고
		// === js 의 함수 재활용과 비슷하다고 생각하면 된다!
		// {typeof props.color === undefined ? <div style={{ backgroundColor: "orange" }}>}
		<div
			style={
				typeof props.color === "undefined"
					? { backgroundColor: "orange" }
					: { backgroundColor: props.color }
			}>
			{typeof props.color !== "undefined"
				? null
				: alert("색상값이 들어오지 않았어요!!")}
			{console.log(props.color)}
			<h1>{props.title}</h1>
			<p>{props.message}</p>
		</div>
	);
}
