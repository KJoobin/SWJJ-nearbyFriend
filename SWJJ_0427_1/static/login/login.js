function login() {

    var data = {};
    data.email = document.getElementsByName("email")[0].value;
    data.password = document.getElementsByName("password")[0].value;
    console.log(data.email.length,data.password.length)
    if(data.email.length || data.password.length) {
      xhrSend("http://localhost:3000/login",data,"post")
    } else {
      alert("email 과 password 를 입력해주세요 !")
    }
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
