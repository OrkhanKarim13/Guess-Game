let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let questionIcon = document.querySelector(".fa-question");
let box = document.querySelector(".boxCount");
let title = document.querySelector(".title");
let scoreCount = document.querySelector(".scoreCount");
let random = getRandomInt(20);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(20));

function check() {
  questionIcon.style.display = "none";
  scoreCount.innerHTML -= 1;

  let paragraph = document.createElement("p");
  box.appendChild(paragraph);

  if (input.value > random) {
    paragraph.innerHTML = "Böyükdür";
  } else if (input.value < random) {
    paragraph.innerHTML = "Kiçikdir";
  } else {
    title.innerHTML = "Doğrudur";
    title.style.color = "green";
  }

  //   paragraph.innerHTML = input.value;
  paragraph.classList.add("addedParagraph");
  setTimeout(function () {
    paragraph.innerHTML = " ";
  }, 1000);
  input.value = null;
}
