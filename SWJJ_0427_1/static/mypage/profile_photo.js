document.querySelector('.change').onclick = function() {
  var modalText = `
    <input type="file" name="pic" accept="image/*">
    <input class="submit" type="submit">
    `
  makeModal(modalText);
  document.querySelector("#modal-manage .submit").onclick = fileUp;
}
document.querySelector(".modifyProfile").onclick = function() {
  var list = document.querySelector(".profile_list");
  list.classList.remove("none");
}
document.querySelector(".modify_button").onclick = function() {
  var data = {};
  var listVal = document.querySelectorAll(".profile_list input");
  data.nickName = listVal[0].value;
  data.area = listVal[1].value;
  data.about = listVal[2].value;
  xhrSend("http://localhost:3000/mypage/update",data,"post");

}
document.querySelector(".cancel").onclick = function() {
  var list = document.querySelector(".profile_list");
  list.classList.add("none")
}

function fileUp() {
  var formData = new FormData();
  formData.append("img", document.querySelector("#modal-manage input").files[0]);
  xhrImgSend("http://localhost:3000/mypage/upload",formData,"post");

}

function xhrImgSend(url,data,method) {

    var xhr = new XMLHttpRequest();

    xhr.open(method,url);
    xhr.send(data);

    xhr.addEventListener('load',function() {
      var result = xhr.responseText;
      if(result.slice(0,6) === "https:") {
        document.querySelector('.profile img').src = result;
      } else {
        alert("maximum file size is 2MB")
      }
      removeModal();
  })
}

function xhrSend(url,data,method) {
  var xhr = new XMLHttpRequest();

  data = JSON.stringify(data)
  xhr.open(method,url);
  xhr.setRequestHeader(`Content-type`,`application/json`);
  xhr.send(data);

  xhr.addEventListener('load',function() {
    alert("변경이 완료되었습니다");
  })
}


//https://www.zerocho.com/category/HTML&DOM/post/59465380f2c7fb0018a1a263 FormData 정리 / 그다음 ajax 센드
