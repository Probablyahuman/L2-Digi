console.log("js launched");
let modal; /*A variable to handle modals, either 0 for no modal, or the id of the current modal*/
let lastKey; /*Stores the last key pressed, used for managing enter behaviour*/
const ansInput = document.getElementById("ans-input");
console.log(ansInput);

function modalDisplay(newState) {
  /*Updates the modal with the input, newState is either ID of new modal or a False value to close all modals */
  document.activeElement.blur();
  /*Remove tab focus whenever modal is opened or closed,
    prevents buggy behaviour like content behind modal remaining focused*/
  if (newState && document.getElementById(newState) != modal) {
    /*If a new modal has been called to open , otherwise this returns false and closes the modal */
      if (modal) {
      /*If there is already a modal, close it before opening the new one */
      modalDisplay(0);
      }
      modal = document.getElementById(newState);
      modal.style.display = "block";
  } else {
    fadeOut(modal);
    modal = 0;
    ansInput.focus();
  }
}

function fadeOut(element) {
  element.classList.add("fade-out");
  setTimeout(() => {
    element.style.display = "none";
    element.classList.remove("fade-out");
  }, 100);
}

function ansSubmission(inputElement) {
  /*A handler for when the answer is submitted */
  if (inputElement.value) {
    alert('You answered "' + inputElement.value + '"');
    
    inputElement.value = "";
  } else {
    alert("Input submitted blank.");
  }
  
  inputElement.focus();
}

document.addEventListener("click", function(e) {
  /*Close the current modal when clicking on the greyed background of it */
  if (event.target == modal) {
    modalDisplay(0);
  }
});

window.addEventListener("keydown", function(e) {
  /*The general event listener for specially bound keys */
  /*console.log(e.key); */
  
  switch (e.key) {
    case "Enter":
      if (lastKey != 'Tab') {
        if (modal) {
          modalDisplay(0);
        } else {
        ansSubmission(ansInput);
        }
        
        e.preventDefault();
      }
      break;

    case "Escape":
      if (modal) {
        modalDisplay(0);
      } else {
        ansInput.focus();
      }
    break;
      
    }
  lastKey = e.key; /* Always record the most recent key pressed */
});