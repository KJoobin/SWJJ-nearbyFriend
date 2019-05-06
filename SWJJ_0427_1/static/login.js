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
        var form = document.createElement("form")
        document.body.appendChild(form);
        form.action = "/"
        form.method = "get"
        form.submit();
      }
      document.querySelector('#errMsg').innerText = result.message
  })
}
