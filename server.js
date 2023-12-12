const express = require("express"); //express모듈 가져오기
const nunjucks = require("nunjucks"); // nunjucks 모듈 가져오기(html 파일을 만들기 위한 모듈)
const app = express(); //app 객체를 이용해 express와 관련된 함수를 app.method()를 이용해 사용 가능하게 함
const path = require("path");
const port = 8000;

nunjucks.configure(path.join(__dirname, "room", "ui"), {
  autoescape: true,
  express: app,
});

app.use(express.static(path.join(__dirname, "room")));
app.use(express.static(path.join(__dirname, "room", "ui")));
app.use(express.static(path.join(__dirname, "room", "style")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "room", "ui", "main.html"));
});

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
}); //8080포트로 연결
