import React from "react";
import Dialog from "./Dialog";

export default function SignUpDialog(props) {
	return (
		<div>
			<Dialog
				color="aliceblue"
				title="안내"
				message="회원 가입이 필요한 서비스 입니다.">
				<a href="#">회원 가입 페이지로 이동</a>
			</Dialog>
		</div>
	);
}
