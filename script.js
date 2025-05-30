console.log("js launched");
let modal; /*A variable to handle modals, either 0 for no modal, or the id of the current modal*/
let lastKey; /*Stores the last key pressed, used for managing enter behaviour*/

function modalDisplay(newState) {
  document.activeElement.blur();
  /*Remove tab focus whenever modal is opened or closed,
    prevents buggy behaviour like content behind modal remaining focused*/
  if (newState) {
    /*If a modal has been called to open otherwise this returns false and closes the modal */
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

document.addEventListener("keydown", function(e) {
  
  if (e.key == "Enter" & lastKey != 'Tab') {
    console.log("Enter Pressed");
    if (modal) {
      modalDisplay(0);
      e.preventDefault();
    } else {
      alert("hello");
    }
  }
  
  lastKey = e.key; /* Always record the most recent key pressed */
});