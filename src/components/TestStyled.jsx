import React from "react";
import styled from "styled-components";

const MyDiv = styled.div`
	background-color: blue;
	padding: 50px 0;
`;
const MyHeading = styled.h1`
	color: red;
`;
const MySpan = styled.span`
	background-color: #fa8c76;
`;
export default function TestStyled() {
	return (
		<>
			<MyDiv>
				<MyHeading>h1 태그 입니다.</MyHeading>
				<MySpan>span 태그입니다</MySpan>
			</MyDiv>
		</>
	);
}
