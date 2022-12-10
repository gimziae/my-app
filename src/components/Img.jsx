import img from "../img/component.jpeg";

function Img() {
	return (
		<div>
			<img src={img} style={{ width: 300 }} />
		</div>
	);
}

export default Img;

// 클래스형 컴포넌트
// import { Component } from "react";

// class Img extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<img src={img} style={{ width: 300 }} />
// 			</div>
// 		);
// 	}
// }
