import React from "react";
import Dialog from "./Dialog";

export default function WelcomeDialog() {
	return (
		// import 해와서 넣고싶은 내용을 넣고 App.js 에서 사용하기!
		<div>
			<Dialog
				color="orange"
				title="welcome to summoner's lift"
				message="Hello, it's me,,"
			/>
		</div>
	);
}
