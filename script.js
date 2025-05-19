console.log("js launched");

function modalDisplay(newState) {
  if (newState) {
    document.getElementById("ans-feedback-modal").style.display = "block";
  } else {
    document.getElementById("ans-feedback-modal").style.display = "none";
  }
  
  /*alert('Button clicked!');*/
}