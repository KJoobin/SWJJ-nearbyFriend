// function logIn() {
//
//     var data = {};
//     data.email = document.getElementsByName("email")[0].value;
//     data.password = document.getElementsByName("password")[0].value;
//     console.log(data);
//
//     xhrSend("http://localhost:3000/login",data,"post")
// }
//
//
//
//
//
// function xhrSend(url,data,method) {
//
//     data = JSON.stringify(data)
//     var xhr = new XMLHttpRequest();
//
//     xhr.open(method,url);
//     xhr.setRequestHeader(`Content-type`,`application/json`);
//     xhr.send(data);
//
//     xhr.addEventListener('load',function() {
//       var result = JSON.parse(xhr.responseText);
//       if(!result.message) {
//         window.location.href = "/"
//       }
//       document.querySelector('#errMsg').innerText = result.message
//   })
// }

document.querySelector('.mypage').onclick = function() {
  window.location.href="/mypage"
}
document.querySelector('.logOut').onclick = function() {
  window.location.href="/logout"
}
document.querySelector(".logo").onclick = function() {
  window.location.href="/"
}
document.querySelector(".write_button").onclick = function() {
  window.location.href="/write"
}
