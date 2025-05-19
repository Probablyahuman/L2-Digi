console.log("js launched");

var modal = document.getElementById("ans-feedback-modal");

function modalDisplay(newState) {
  if (newState) {
    document.getElementById("ans-feedback-modal").style.display = "block";
  } else {
    modal.style.display = "none";
  }
  
  /*alert('Button clicked!');*/
}
/*
window.onclick() = function(event) {
  if event.target == document.getElement
}
*/