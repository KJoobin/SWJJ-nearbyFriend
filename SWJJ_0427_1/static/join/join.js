function join() {

    var data = {};
    data.email = document.getElementsByName("email")[0].value;
    data.password = document.getElementsByName("password")[0].value;

    xhrSend("http://localhost:3000/join",data,"post") // 데이터를 router/join/noin.js로 보낸다.
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
        if(url === "http://localhost:3000/join") {
          window.location.href="/join"
        } else if (url === "http://localhost:3000/login") {
          window.location.href="/"
        }
      }
      document.querySelector('#errMsg').innerText = result.message
  })
}
