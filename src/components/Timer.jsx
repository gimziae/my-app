import { useEffect } from "react";

export default function Timer() {
	useEffect(() => {
		const timer = setInterval(() => {
			console.log("타미어 실행 중");
		}, 1000);

		// 클린업 (언마운트 시 멈추는 코드)
		return () => clearInterval(timer);
	}, []);

	return (
		<>
			<h1>타이머가 실행 중입니다!</h1>
		</>
	);
}
