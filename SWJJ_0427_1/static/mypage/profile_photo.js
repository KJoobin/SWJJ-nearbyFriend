document.querySelector('.change').onclick = function() {

  var modalText = `
    <input type="file" name="pic" accept="image/*">
    <input class="submit" type="submit">
    `

  makeModal(modalText);
  document.querySelector("#modal-manage .submit").onclick = fileUp;

}


function fileUp() {
  var formData = new FormData();
  formData.append("img", document.querySelector("#modal-manage input").files[0]);
  console.log(formData.get("img"))
  xhrSend("http://localhost:3000/mypage/upload",formData,"post");

}

function xhrSend(url,data,method) {

    var xhr = new XMLHttpRequest();

    xhr.open(method,url);
    xhr.send(data);

    xhr.addEventListener('load',function() {
      var result = xhr.responseText;
      document.querySelector('.profile img').src = result;
      removeModal();
  })
}


//https://www.zerocho.com/category/HTML&DOM/post/59465380f2c7fb0018a1a263 FormData 정리 / 그다음 ajax 센드
