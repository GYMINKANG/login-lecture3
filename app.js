"use strict"

//모듈
const express = require("express");
const app = express();


//라우팅
const home = require("./routes/home/");

//앱세팅
app.set("views", "./views"); //views를 관리할 저장  폴더를 /veiws로 설정
app.set("view engine","ejs"); //view engine을 ejs를 사용 


app.use("/",home); // "/" 경로로 들어오면 home으로 보내준다.


module.exports=app;