function join() {

    var data = {};
    data.email = document.getElementsByName("email")[0].value;
    data.password = document.getElementsByName("password")[0].value;
    data.nickname = document.getElementsByName("nickname")[0].value;
    data.sex = document.getElementsByName("sex")[0].value;
    data.age = document.getElementsByName("age")[0].value;
    data.area = document.getElementsByName("area")[0].value;
    data.about = document.getElementsByName("about")[0].value;
    console.log(data);

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
        // var form = document.createElement("form")
        // document.body.appendChild(form);
        // form.action = `/join?id=${data.nickname}`;
        // form.method = "get"
        // form.submit();
        alert(data);
        alert(result);
        window.location.href = `/join?nickname=${result.nickname}`;
        // /join?id=nickname
      }
      document.querySelector('#errMsg').innerText = result.message
  })
}
