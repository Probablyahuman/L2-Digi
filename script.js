console.log("js launched");
let modal; /*A variable to handle modals, either 0 for no modal, or the id of the current modal*/

function modalDisplay(newState) {
  if (newState) {
    if (modal) {
      modal.style.display = "none";
    }
    if (newState != modal) {
      modal = document.getElementById(newState);
      modal.style.display = "block";
    }
  } else {
    modal.style.display = "none";
    modal = 0;
  }
  
  /*alert('Button clicked!');*/
}

window.onclick = function(event) {
  if (event.target == modal) {
    modalDisplay(0);
  }
};

document.onkeydown = function(key) {
  if (key.key == "Enter") {
    console.log("Enter Pressed");
    if (modal) {
      modalDisplay(0);
    } else {
      alert("hello");
    }
  }
};