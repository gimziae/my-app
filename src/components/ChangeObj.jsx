import { useState } from "react";

function ChangeObj(props) {
	// const newArr = props.objArr.map((el) => {
	// 	return el;
	// });
	// console.log(newArr);

	const [index, setIndex] = useState(0);

	let profile = props.objArr[index];

	const onClickChange = () => {
		if (index === props.objArr.length - 1) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
		// index === 2 ? setIndex((index -= 2)) : setIndex((index += 1));
	};

	return (
		<div>
			<h1>이름:{profile.name}</h1>
			<h1>나이:{profile.age}</h1>
			<h1>별명:{profile.nickName}</h1>
			<button onClick={onClickChange}>프로필 변경하기</button>
		</div>
	);
}

export default ChangeObj;
