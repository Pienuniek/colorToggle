const hamburger = document.querySelector(".hamburger");
const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const parent = document.querySelector(".parent");
const defaultRadioBtn = document.getElementById("Grey");
const redRadioBtn = document.getElementById("Red");
const orangeRadioBtn = document.getElementById("Orange");
const purpleRadioBtn = document.getElementById("Purple");
const greenRadioBtn = document.getElementById("Green");
const greyOn1 = document.getElementById("Grey");
const redOn2 = document.getElementById("Red");

defaultRadioBtn.checked = true;

hamburger.addEventListener("click", () => (menu.style.left = 0));

greyOn1.addEventListener("keyup", (e) => {
  if (e.key === 1) {
    backgroundGrey();
  }
  2;
});
redOn2.addEventListener("keyup", (e) => {
  if (e.key === 2) {
    backgroundRed();
  }
});

function backgroundGrey() {
  if (body.classList.contains("bgGreen")) {
    body.classList.replace("bgGreen", "bgGrey");
    defaultRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgPurple")) {
    body.classList.replace("bgPurple", "bgGrey");
    defaultRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgOrange")) {
    body.classList.replace("bgOrange", "bgGrey");
    defaultRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgRed")) {
    body.classList.replace("bgRed", "bgGrey");
    defaultRadioBtn.checked = true;
    menu.style.left = "";
  } else {
    defaultRadioBtn.checked = true;
    menu.style.left = "";
  }
}

function backgroundRed() {
  if (body.classList.contains("bgGreen")) {
    body.classList.replace("bgGreen", "bgRed");
    redRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgPurple")) {
    body.classList.replace("bgPurple", "bgRed");
    redRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgOrange")) {
    body.classList.replace("bgOrange", "bgRed");
    redRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgGrey")) {
    body.classList.replace("bgGrey", "bgRed");
    redRadioBtn.checked = true;
    menu.style.left = "";
  } else {
    redRadioBtn.checked = true;
    menu.style.left = "";
  }
}

function backgroundOrange() {
  if (body.classList.contains("bgGreen")) {
    body.classList.replace("bgGreen", "bgOrange");
    orangeRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgPurple")) {
    body.classList.replace("bgPurple", "bgOrange");
    orangeRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgGrey")) {
    body.classList.replace("bgGrey", "bgOrange");
    orangeRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgRed")) {
    body.classList.replace("bgRed", "bgOrange");
    orangeRadioBtn.checked = true;
    menu.style.left = "";
  } else {
    orangeRadioBtn.checked = true;
    menu.style.left = "";
  }
}

function backgroundPurple() {
  if (body.classList.contains("bgGreen")) {
    body.classList.replace("bgGreen", "bgPurple");
    purpleRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgGrey")) {
    body.classList.replace("bgGrey", "bgPurple");
    purpleRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgOrange")) {
    body.classList.replace("bgOrange", "bgPurple");
    purpleRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgRed")) {
    body.classList.replace("bgRed", "bgPurple");
    purpleRadioBtn.checked = true;
    menu.style.left = "";
  } else {
    purpleRadioBtn.checked = true;
    menu.style.left = "";
  }
}

function backgroundGreen() {
  if (body.classList.contains("bgGrey")) {
    body.classList.replace("bgGrey", "bgGreen");
    greenRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgPurple")) {
    body.classList.replace("bgPurple", "bgGreen");
    greenRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgOrange")) {
    body.classList.replace("bgOrange", "bgGreen");
    greenRadioBtn.checked = true;
    menu.style.left = "";
  } else if (body.classList.contains("bgRed")) {
    body.classList.replace("bgRed", "bgGreen");
    greenRadioBtn.checked = true;
    menu.style.left = "";
  } else {
    greenRadioBtn.checked = true;
    menu.style.left = "";
  }
}

// I didn't add the mouseover and mouseout events on the hamburger because of two reasons. The first is that I hate it when popups appear out of nowhere when I'm randomly moving my mouse over the page. The second is that I couldn't figure out how to keep the menu open when the mouse went off the hamburger. The first reason is why I didn't put more effort into this bonus feature.
