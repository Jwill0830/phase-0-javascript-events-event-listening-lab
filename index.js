function addingEventListener() {
}
// Define a function called addingEventListener
function addingEventListener() {
    // Get the input element by its id
    const input = document.getElementById('button');
  
    // Define a function to run when the event is triggered
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add the event listener to the input element
    input.addEventListener('click', clickAlert);
  }
  
  // For testing purposes, you might want to call this function manually
  // addingEventListener();
  