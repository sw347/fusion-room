const express = require("express"); //express모듈 가져오기
const nunjucks = require("nunjucks"); // nunjucks 모듈 가져오기(html 파일을 만들기 위한 모듈)
const app = express(); //app 객체를 이용해 express와 관련된 함수를 app.method()를 이용해 사용 가능하게 함

app.listen('8080',()=>{
    console.log("8080포트로 서버 연결");
});//8080포트로 연결

app.get('/get',(req,res)=>{
    res.send("ㅎㄷㄷ")
});