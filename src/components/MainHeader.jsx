import React, { Component } from "react";

function MainHeader(props) {
	console.log(props);
	return (
		<>
			<h1>{props.userID}님이 들어왔습니다.</h1>
			<a href={props.href} target="_blank">
				{props.text}
			</a>
		</>
	);
}

export default MainHeader;

// 클래스형 컴포넌트
// class MainHeader extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello, Component World!</h1>
// 			</div>
// 		);
// 	}
// }
