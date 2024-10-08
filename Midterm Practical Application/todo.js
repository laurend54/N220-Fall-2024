// Variable to track the list of todo items
let todoItems = [];

// Function to add an item to the list
function addItem() {
  // Get the value from the input field
  const itemInput = document.getElementById("item");
  const itemValue = itemInput.value.trim();

  // Only add if there's something in the input
  if (itemValue) {
    // Add the item to the todoItems array
    todoItems.push(itemValue);

    // Update the displayed list
    updateListDisplay();

    // Clear the input field after adding the item
    itemInput.value = "";
  } else {
    alert("Please enter an item.");
  }
}

// Function to update the <ul> tag to show all items in the list
function updateListDisplay() {
  // Get the <ul> element
  const list = document.getElementById("list");

  // Clear the current list content
  list.innerHTML = "";

  // Loop through the todoItems array and add each item as an <li> element
  todoItems.forEach((item) => {
    list.innerHTML += `<li>${item}</li>`;
  });
}

// Function to summarize the list
function summarizeList() {
  // Get the summary paragraph element
  const summary = document.getElementById("summary");

  // Check if the list has items
  if (todoItems.length > 0) {
    // Total items in the list
    let totalItems = `Total Items: ${todoItems.length}`;

    // First item in the list
    let firstItem = `First Item: ${todoItems[0]}`;

    // Last item in the list (same as first if there's only one item)
    let lastItem = `Last Item: ${todoItems[todoItems.length - 1]}`;

    // Display the summary with line breaks
    summary.innerHTML = `${totalItems}<br />${firstItem}<br />${lastItem}`;
  } else {
    // If there are no items, show a message
    summary.innerHTML = "Your list is empty.";
  }
}
