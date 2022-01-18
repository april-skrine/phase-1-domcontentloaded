document.addEventListener("DOMContentLoaded", function() {
  let thisText = document.getElementById('text')
  thisText.textContent = "This is really cool!"
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);