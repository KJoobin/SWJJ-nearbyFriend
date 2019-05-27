var star = document.querySelectorAll(".star span")
var grade = document.querySelector(".grade").innerText;
grade = Number(grade);
if(grade !== 0) {
  for(var i = 0; i < 4; i++) {
    if(grade > i && grade <= i + 0.5) {
      star[i].classList.add("half")
      break;
    } else {
      star[i].classList.add("full")
    }
  }
}
