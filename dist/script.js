let display = document.getElementById("display");
let historyBox = document.getElementById("historyBox");
let sideMenu = document.getElementById("sideMenu");
let clickSound = document.getElementById("clickSound");

function playClick() {
  // sound
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play();
  }

  // vibration (mobile only)
  if (navigator.vibrate) {
    navigator.vibrate(30);
  }
}

function append(value) {
  playClick();
  display.value += value;
}

function clearDisplay() {
  playClick();
  display.value = "";
}

function deleteLast() {
  playClick();
  display.value = display.value.slice(0, -1);
}

function calculate() {
  playClick();
  try {
    let result = Function("return " + display.value)();
    historyBox.innerHTML += `<p>${display.value} = ${result}</p>`;
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

/* MENU */
function toggleMenu() {
  playClick();
  sideMenu.classList.toggle("active");
}

/* THEME */
function toggleTheme() {
  playClick();
  document.body.classList.toggle("light");
}

/* RESET */
function resetApp() {
  playClick();
  display.value = "";
  historyBox.innerHTML = "";
  document.body.classList.remove("light");
  sideMenu.classList.remove("active");
}

/* HISTORY */
function showHistory() {
  playClick();
  alert(historyBox.innerText || "No history yet");
}