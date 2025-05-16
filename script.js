console.log("js launched");

function modalDisplay(newState) {
  alert('Button clicked!');
  
  if(newState) {
    document.getElementById("ans-feedback-modal".style.display="block");
  }
}