function login() {

    var data = {};
    data.email = document.getElementsByName("email")[0].value;
    data.password = document.getElementsByName("password")[0].value;

    xhrSend("http://localhost:3000/login",data,"post")
}

document.querySelector("#js-login_button").addEventListener("click",function(){
  modalInLogin()
});

<<<<<<< HEAD
// function xhrSend(url,data,method) {

//     data = JSON.stringify(data)
//     var xhr = new XMLHttpRequest();

//     xhr.open(method,url);
//     xhr.setRequestHeader(`Content-type`,`application/json`);
//     xhr.send(data);

//     xhr.addEventListener('load',function() {
//       var result = JSON.parse(xhr.responseText);
//       if(!result.message) {
//         var form = document.createElement("form")
//         document.body.appendChild(form);
//         form.action = "/"
//         form.method = "get"
//         form.submit();
//       }
//       document.querySelector('#errMsg').innerText = result.message
//   })
// }
=======
function loadModal () {
  window.addEventListener('load',function() {
    setTimeout(function() {
      modalInLogin()
    },1000);
  })
}

function modalInLogin() {
  makeModal(loginText)
  document.querySelector("#login-btn").addEventListener("click",login);
  document.querySelector("#join-btn").addEventListener("click",function(){
    var div = document.querySelector(".modalText");
    div.innerHTML = joinText
    document.querySelector("#join-btn-2").addEventListener("click",join); //join-btn-2 버튼 클릭시 join.js 실행
  });
}

function init() {
  loadModal();
}

init();
>>>>>>> master
