import React from "react";
import srcImg from "../img/component.jpeg";

export default function Image() {
	return (
		<>
			{/* public 에 저장되어 있을 경우 ; 리액트 내부에서 접근가능하게 설정을 해줬당!! */}
			{/* /img/@@.jpg 쓰면 됨 */}
			<img src="/images/img.jpeg" alt="케이크" width={200} />
			<img src="/images/cake.jpeg" alt="케이크" width={100} />
			{/* src 내부에서 사용할 때는 import 형식으로 이용 */}
			<img src={srcImg} alt="케이크" width={100} />
		</>
	);
}
