//detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) //for all buttons we add eventListner function
{
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick() {
  // var audio = new Audio("sounds/tom-1.mp3");
  // audio.play();
  //this.style.color = "white";   // this--> is identity of button press event-->it is like current object pointer
  var buttonInnerHTML = this.innerHTML; // this-->gives the innerHTML value of the button which is pressed currently
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

//detecting keyboard press
document.addEventListener("keydown", handleKeyboardPress);

function handleKeyboardPress(event)  //event-->used to know keyboard key values pressed with other information
{
  makeSound(event.key);   //event.key-->key as event property to know keyboard key pressed
  buttonAnimation(event.key);
  //alert("key is pressed");
}

//common function for switch cases
function makeSound(key)
{
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey)
{
  //document.querySelector(".w")
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){activeButton.classList.remove("pressed");},100); //1st parameter is function()..2nd parameter is 100 milisec timeout
  //this arrangement is only to animate the button pressed and removed
}
