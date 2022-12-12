import React from "react";

export default function ReactFragment() {
	// <React.Fragment> === <>
	// 사용하는 이유 : css 적용 시 div 요소가 있을 경우 추가해줘야 하므로 편리하게 이용하기 위해 이용한다.
	// 남발해선 안돼!! div 가 방해요소가 될 때 사용해준다!
	return (
		<>
			<h1>안녕하세요</h1>
			<span>반갑습니다.</span>
		</>
	);
}
