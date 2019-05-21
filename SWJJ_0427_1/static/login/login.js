
function login() {

    var data = {};
    data.email = document.getElementsByName("email")[0].value;
    data.password = document.getElementsByName("password")[0].value;
    console.log(data);

    xhrSend("http://localhost:3000/login",data,"post")
}


function xhrSend(url,data,method) {

    data = JSON.stringify(data)
    var xhr = new XMLHttpRequest();

    xhr.open(method,url);
    xhr.setRequestHeader(`Content-type`,`application/json`);
    xhr.send(data);

    xhr.addEventListener('load',function() {
      var result = JSON.parse(xhr.responseText);
      if(!result.message) {
        window.location.href = "/"
      }
      document.querySelector('#errMsg').innerText = result.message
  })
}

document.querySelector("#js-login_button").addEventListener("click",function(){
  modalInLogin()
});

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
