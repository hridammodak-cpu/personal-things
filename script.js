function showMessage() {
  document.getElementById("message").classList.remove("hidden");
  startConfetti();
}

function startConfetti() {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);

    // random position
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor =
      "hsl(" + Math.random() * 360 + ", 100%, 50%)";

    // random duration
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";

    // remove after falling
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}
