// document.querySelector("#log_in").addEventListener("click",function() {
//   var data = {};
//   data.email = document.getElementsByName("email")[0].value;
//   data.password = document.getElementsByName("password")[0].value;
//
//   xhrSend("http://localhost:3000/login",data,"post")
// })
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
//       console.log(result);
//       window.location.href="/main"
//       if(result.send) {
//         if(result.info) {
//           document.querySelector('#js-user').innerText = `Hello ${result.send}, 반갑습니다.`
//         } else {
//           document.querySelector('#js-user').innerText = `비밀번호 정보를 다시 확인해 주세요 `
//         }
//       } else {
//         document.querySelector('#js-user').innerText = `email 정보를 다시 확인해 주세요`
//       }
//   })
// }
