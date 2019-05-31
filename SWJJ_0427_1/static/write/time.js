var time = document.querySelectorAll(".time input");
var now = new Date();

time[0].value = `${now.getFullYear()}-${ now.getMonth() < 10 ? "0" + now.getMonth() :now.getMonth() }-${now.getDay() < 10 ? "0" + now.getDay() : now.getDay()}`;
time[1].value = `${now.getHours() < 10 ? "0" + now.getHours() : now.getHours() }:${now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes() }:${now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds()}`
