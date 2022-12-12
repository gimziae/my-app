import React from "react";

export default function TestInlineCSS() {
	const headingStyle = {
		color: "blue",
	};
	const spanStyle = {
		background: "skyblue",
		fontWeight: "700",
	};
	return (
		<div style={{ background: "orange" }}>
			<h1 style={headingStyle}>CSS 테스트 컴포넌트 입니다.</h1>
			<span style={spanStyle}>해당 컴포넌트를 CSS로 꾸며보아요!</span>
		</div>
	);
}
