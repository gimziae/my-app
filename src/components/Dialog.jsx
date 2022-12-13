import React from "react";

export default function Dialog(props) {
	return (
		// 기본이 되는 컴포넌트를 만들어두고
		// === js 의 함수 재활용과 비슷하다고 생각하면 된다!
		<div style={{ backgroundColor: props.color }}>
			<h1>{props.title}</h1>
			<p>{props.message}</p>
		</div>
	);
}
