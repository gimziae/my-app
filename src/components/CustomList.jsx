function CustomList(props) {
	return (
		<ol>
			{props.arr.map((el, index) => {
				return <li key={index}>{el}</li>;
			})}
			{/* = 같은 것 */}
			{props.arr.map((el) => {
				return <li key={el}>{el}</li>;
			})}
			{/* 키값을 받아줘야 유니크하게 사용 가능 key={##} 빼먹지 않기 */}
		</ol>
	);
}

export default CustomList;
