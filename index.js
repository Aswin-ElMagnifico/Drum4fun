function playSound(identifier) {
  switch (identifier) {
    case "w":
      var audTom1 = new Audio("sounds/tom-1.mp3");
      audTom1.play();
      break;

    case "a":
      var audTom2 = new Audio("sounds/tom-2.mp3");
      audTom2.play();
      break;

    case "s":
      var audTom3 = new Audio("sounds/tom-3.mp3");
      audTom3.play();
      break;

    case "d":
      var audTom4 = new Audio("sounds/tom-4.mp3");
      audTom4.play();
      break;

    case "j":
      var audSnare = new Audio("sounds/snare.mp3");
      audSnare.play();

      break;

    case "k":
      var audCrash = new Audio("sounds/crash.mp3");
      audCrash.play();
      break;

    case "l":
      var audKickBass = new Audio("sounds/kick-bass.wav");
      audKickBass.play();
      break;

    default:

  }
}


// Adding event listeners to all the buttons
document.querySelectorAll("button.drum").forEach(button => {
  button.addEventListener("click", function() {
    playSound(this.textContent);
  })
});

// Adding event listeners for key presses
document.addEventListener("keypress", function(event) {
  playSound(event.key);
});
