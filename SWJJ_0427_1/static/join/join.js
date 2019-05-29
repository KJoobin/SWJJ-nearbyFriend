function join() {
    isBlank = false;
    var data = {};
    data.email = document.getElementsByName("email")[0].value;
    data.password = document.getElementsByName("password")[0].value;
    data.nickname = document.getElementsByName("nickname")[0].value;
    data.sex = document.getElementsByName("sex")[0].value;
    data.age = document.getElementsByName("age")[0].value;
    data.area = document.getElementsByName("area")[0].value;
    data.about = document.getElementsByName("about")[0].value;
    console.log(data);
    for(var key in data) {
      if(!data[key].length) {
        alert(key + "값을 입력해 주세요!")
        isBlank = true;
        break;
      }
    }
    if(!isBlank) {
      xhrSend("http://localhost:3000/join",data,"post") // 데이터를 router/join/noin.js로 보낸다.
    }
}


function xhrSend(url,data,method) {

    data = JSON.stringify(data)
    var xhr = new XMLHttpRequest();

    xhr.open(method,url);
    xhr.setRequestHeader(`Content-type`,`application/json`);
    xhr.send(data);

    console.log(url);

    xhr.addEventListener('load',function() {
      var result = JSON.parse(xhr.responseText);
      if(!result.message) {
        // var form = document.createElement("form")
        // document.body.appendChild(form);
        // form.action = `/join?id=${data.nickname}`;
        // form.method = "get"
        // form.submit();
        if(url === 'http://localhost:3000/login'){
          window.location.href="/"
        }else{
          window.location.href = `/join?nickname=${result.nickname}`;
        }
        // /join?id=nickname
      }
      document.querySelector('#errMsg').innerText = result.message
  })
}
