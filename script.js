//your JS code here. If required.
// Select elements
const select = document.getElementById("colorSelect");
const button = document.querySelector('input[type="button"]');

// Add event listener to button
button.addEventListener("click", function() {
  // Get the selected index
  const selectedIndex = select.selectedIndex;

  // If a valid option is selected, remove it
  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
});
