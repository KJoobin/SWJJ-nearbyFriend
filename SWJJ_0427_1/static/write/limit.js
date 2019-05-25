function upDownButton() {
  document.querySelector(".up").onclick = function() {
    var limitT = document.querySelector(".limitT")
    if(isNaN(Number(limitT.value))) {
      limitT.value = 0;
    } else {
      limitT.value = Number(limitT.value) + 1;
    }
  }

  document.querySelector(".down").onclick = function() {
    var limitT = document.querySelector(".limitT");
    if(isNaN(Number(limitT.value))) {
      limitT.value = 0;
    } else if(limitT.value > 0) {
      limitT.value = Number(limitT.value) - 1;
    }
  }
}

function init() {
  upDownButton();
}
init();
