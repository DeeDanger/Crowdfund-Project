const byyk = document.getElementById("book");
const byykmark = document.querySelector(".bookmark");
const raised = document.querySelector(".num1");
const target = document.querySelector(".text1");
const progressbar = document.querySelector(".progressbar");
const modal = document.getElementById("myModal");
const backBtn = document.getElementById("backBtn");
const span = document.getElementsByClassName("close")[0];
const radio = document.querySelector(".radio2");
const enterpledge = document.getElementById("pledgeEnter");
const contBtn = document.getElementById("contbutton");
const thanks = document.getElementById("thanksbox");
const gotit = document.getElementsByClassName("gotbutton")[0];
const pledgeBox = document.getElementsByClassName("pledgebox")


radio.onclick = function () {
  enterpledge.style.display = "block";
};

backBtn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

contBtn.onclick = function () {
  thanks.style.display = "block";
};
gotit.onclick = function () {
  modal.style.display = "none";
};

document.querySelector(".bookbutton").addEventListener("click", bookFunction);
function bookFunction() {
  byyk.style.paddingLeft = "15px";
  byyk.style.color = "hsl(176, 72%, 28%)";
  byyk.innerHTML = "Bookmarked";
  byykmark.src = "images/icon-bookmark copy.svg";
}

window.addEventListener("DOMContentLoaded", function () {
  let targetValue = parseInt(target.innerHTML.split(" ")[1].slice(1));
  let raisedValue = parseInt(raised.innerHTML.slice(1));
  let percentage = (raisedValue / targetValue) * 100;
  progressbar.style.width = `${percentage}%`;
});

