var loginText =`<div class="Expand">hello<div><input type="text" name="email"></input></div></div>
<div class="Expand">password<div><input type="password" name="password"></input></div></div>
<div><button id="login-btn">로그인</button></div>
<div><button id="join-btn">회원가입</button></div>
<div id="errMsg"></div>`;


var joinText =
`
<div><h4>회원가입</h4></div>
<div>
email: <input name="email" type="email"><br>
<p id="errMsg"></p>
password: <input name="password" type="text"><br>
nickname: <input name="nickname" type="text"><br>
gender: <input type="radio" name="sex" value="male" checked> Male<br>
<input type="radio" name="sex" value="female"> Female<br>
<input type="radio" name="sex" value="other"> Other<br>
age: <input name="age" type="number"><br>
area: <input name="area" type="text"><br>
about: <textarea name="about" type="text"></textarea><br><br>
<button id ="join-btn-2">가입하기</button>
</div>
`
;




function makeModal(text) {
  console.log(document.querySelector("#modal-manage").childNodes.length)
  if(!document.querySelector("#modal-manage").childNodes.length) {
    modalManage();
    modalDiv();
    closeModal();
    textInModal(text);
    var clickModal = false;
    document.querySelector("#modal-manage div").addEventListener('click',function() {
      if(document.querySelector("#modal-manage").childNodes.length && !clickModal) {
        removeModal();
      }
      clickModal = false;
    })
    document.querySelector("#modal-manage div div").addEventListener('click',function() {
      clickModal = true;
    })
  }
}

function modalManage() {
  var div = document.createElement("div");
  div.classList.add("modalManage","centerAlign","Bgc(#000.68)")
  document.querySelector("#modal-manage").appendChild(div);
}

function modalDiv() {
  var div = document.createElement("div");
  div.classList.add("Bdrs(8px)","Ov(h)","Ov(v)","Ta(c)","Bgc(#fff)","M(10px)","Py(36px)","Px(44px)","W(440px)","H(a)","Pos(r)");
  document.querySelector("#modal-manage .modalManage").appendChild(div);
}

function closeModal() {
  var div = document.createElement("div");
  div.classList.add("close","F(r)","Sq(30px)","pos(r)");
  div.addEventListener('click',removeModal)
  div.innerHTML = `<svg class="Scale(.5) Expand" width="22" height="22" viewBox="0 0 22 22"><path class="Fill($c-divider) close:h_Fill($c-gray)" d="M14.6 11.7v-1.4l6.5 6.5c1.3 1.2 1.3 3 0 4.3-1 1.3-3 1.3-4.2 0l-6.5-6.4h1.4L5.2 21c-1.2 1.3-3 1.3-4.3 0-1.3-1-1.3-3 0-4.2l6.4-6.5v1.4L1 5.2C-.4 4-.4 2.2 1 1 2-.4 4-.4 5 1l6.5 6.4h-1.4L16.8 1C18-.4 19.8-.4 21 1c1.3 1 1.3 3 0 4.2l-6.4 6.5z" stroke="none" stroke-width="1"></path></svg>`
  document.querySelector("#modal-manage div div").appendChild(div);
}

function textInModal(text) {
  var div = document.createElement("div");
  div.classList.add("modalText","Ta(c)","Pos(r)","H(100%)","D(f)","Fld(c)")
  div.innerHTML = text;
  document.querySelector("#modal-manage div div").appendChild(div);

}

function removeModal() {
  document.querySelector("#modal-manage .modalManage").remove()

}
