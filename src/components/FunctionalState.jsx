import { useState } from "react";

function FunctionalState() {
	let [message, setMessage] = useState("FuntionalState 초기 값으로 설정");

	const onClickEnter = () => {
		setMessage("안녕하세요!");
	};
	const onClickLeave = () => {
		setMessage("안녕히 가세요!");
	};
	return (
		<>
			<br />
			<hr />
			<h1>{message}</h1>
			<button onClick={onClickEnter}>입장</button>
			<button onClick={onClickLeave}>퇴장</button>
		</>
	);
}

export default FunctionalState;
