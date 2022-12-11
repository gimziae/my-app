const express = require("express");
const cors = require("cors");

const PORT = 4000;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
	const pororoObjArr = [
		{
			name: "뽀로로",
			age: 5,
			nickName: "사고뭉치",
		},
		{
			name: "루피",
			age: 4,
			nickName: "공주님",
		},
		{
			name: "크롱",
			age: 8,
			nickName: "장난꾸러기",
		},
	];

	res.send(JSON.stringify(pororoObjArr));
});

app.listen(PORT, () => {
	console.log(`데이터 서버가 ${PORT}번에서 실행 중 입니다!`);
});
