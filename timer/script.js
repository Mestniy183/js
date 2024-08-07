const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startBtn = document.getElementById("startButton");
const stopBtn = document.getElementById("stopButton");
let remainingTime;
let intervalId;

function startTimer(event) {
  event.preventDefault;
  const hours = parseInt(hoursInput.value);
  const minutes = parseInt(minutesInput.value);
  const seconds = parseInt(secondsInput.value);
  remainingTime = hours * 3600 + minutes * 60 + seconds;
  setTimeout(() => {
    intervalId = setInterval(updateTimer, 1000);
    hideElement(startBtn);
    showElement(stopBtn);
    // document.documentElement.requestFullscreen();
  }, 1000);
}

function updateTimer() {
  if (remainingTime >= 0) {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    console.log(hours.toString().padStart(2, "0"));
    hoursInput.value = hours.toString().padStart(2, "0");
    minutesInput.value = minutes.toString().padStart(2, "0");
    secondsInput.value = seconds.toString().padStart(2, "0");
    remainingTime--;
  } else {
    stopTimer();
  }
}

function stopTimer() {
  clearInterval(intervalId);
  hideElement(stopBtn);
  showElement(startBtn);
  document.exitFullscreen();
}

function hideElement(element) {
  element.classList.add("hide");
}

function showElement(element) {
  element.classList.remove("hide");
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
