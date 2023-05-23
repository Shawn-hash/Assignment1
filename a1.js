// Initialize an empty array to store the items
var items = [];

// Check if there are any initial items stored
var storedItems = localStorage.getItem("items");
if (storedItems) {
  // If there are stored items, parse the JSON string and assign it to the items array
  items = JSON.parse(storedItems);
}

// Function to add a new item
function newItem() {
  // Read input values
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var price = document.getElementById("price").value;
  var image = document.getElementById("image").value;

  // Create a new item object
  var newItem = {
    name: name,
    description: description,
    price: price,
    image: image
  };

  // Add the new item to the items array
  items.push(newItem);

  // Store the updated items array as a JSON string
  localStorage.setItem("items", JSON.stringify(items));

  // Render the card items
  renderCardItems();
  
  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";
  document.getElementById("image").value = "";
}

// Function to render the card items
function renderCardItems() {
  // Iterate over the items array and create card elements for each item
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    
    var cardItem = document.createElement("div");
    cardItem.className = "card";

    var cardImage = document.createElement("img");
    cardImage.src = item.image;
    cardItem.appendChild(cardImage);

    var cardContent = document.createElement("div");
    cardContent.className = "card-content";

    var cardTitle = document.createElement("h3");
    cardTitle.textContent = item.name;
    cardContent.appendChild(cardTitle);

    var cardDescription = document.createElement("p");
    cardDescription.textContent = item.description;
    cardContent.appendChild(cardDescription);

    var cardPrice = document.createElement("p");
    cardPrice.textContent = "Price: " + item.price;
    cardContent.appendChild(cardPrice);

    cardItem.appendChild(cardContent);

    cardContainer.appendChild(cardItem);
  }
}

function deleteAllItems() {
  // Clear the items array
  items = [];

  // Clear the local storage
  localStorage.removeItem("items");
  
  var cardContainer = document.getElementById("cardContainer");
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
}

function removeCard(button) {
  var card = button.parentNode;
  card.parentNode.removeChild(card);
}

// Call the renderCardItems function to initially display the card items
renderCardItems();



