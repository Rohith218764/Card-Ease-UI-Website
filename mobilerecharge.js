function validate() {
  var Number = document.getElementById("num").value;
  var Pattern = /^\d{10}$/;
  var Plan = false;
  var Radios = document.getElementsByName("amount");
  for (var i = 0; i < Radios.length; i++) {
    if (Radios[i].checked) {
      Plan = true;
      break;
    }
  }
  if (Number === "" && !Plan) {
    alert("Please enter the Moblie number and select the recharge plan");
    return;
  } else {
    if (!Number.match(Pattern)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!Plan) {
      alert("Please select any recharge plan.");
      return;
    }
  }
  window.location.href = "password.html";
}

const time = 120000;
let timeout;
function startTimer() {
  timeout = setTimeout(redirect, time);
}
function resetTimer() {
  clearTimeout(timeout);
  startTimer();
}
function redirect() {
  window.location.href = "index.html";
  alert("You have been idle for too long. Please log in again.");
}
window.onload = startTimer;
window.addEventListener("mousemove", resetTimer);
window.addEventListener("keypress", resetTimer);
