import { Component } from "react";

class ClassState extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		message: "초기값으로 설정",
	// 	};
	// }
	// 최신버전 (위와 같은 코드)
	state = {
		message: "초기값으로 설정",
	};
	render() {
		const { message } = this.state; // = const message = this.state.message;
		const onClickEnter = () => {
			this.setState({ message: "안녕하세요" });
		};
		const onClickLeave = () => {
			this.setState({ message: "안녕히 가세요" });
		};
		return (
			<>
				<br />
				<hr />
				<button onClick={onClickEnter}>입장</button>
				<button onClick={onClickLeave}>퇴장</button>
				<h1>{message}</h1>
			</>
		);
	}
}

export default ClassState;
