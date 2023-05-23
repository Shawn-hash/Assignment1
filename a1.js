// Initialize an empty array to store the items
var items = [];

// Check if there are any initial items stored
var storedItems = localStorage.getItem("items");
if (storedItems) {
  // If there are stored items, parse the JSON string and assign it to the items array
  items = JSON.parse(storedItems);
}

function redirectToAboutPage() {
  window.location.href = "about.html";
}

// Function to add a new item
function newItem() {
  // Read input values
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var price = document.getElementById("price").value;
  var image = document.getElementById("image").value;

  // Create a new item object
  if (name !== "" && description !== "" && price !== "" && image !== "") {
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
        clearInputs();
  } else {
      alert("Please fill in all fields.");
  }

}

function renderCardItems() {
  var cardContainer = document.getElementById("cardContainer");
   cardContainer.innerHTML = "";
   appendFirstTwoItems();

  // Iterate over the items array and create card elements for each item
  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    var cardItem = document.createElement("div");
    cardItem.className = "card";

    var closeButton = document.createElement("span");
    closeButton.textContent = "×";
    closeButton.classList.add("close-btn");
    closeButton.addEventListener("click", function() {
      var index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
        renderCardItems(); // Render the updated cards
      }
    });
    cardItem.appendChild(closeButton);

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
    cardPrice.textContent = "Price(CAD): " + item.price;
    cardContent.appendChild(cardPrice);

    cardItem.appendChild(cardContent);
    cardContainer.appendChild(cardItem);
  }
}

function appendFirstTwoItems() {
    // for towel
    var cardItem = document.createElement("div");
    cardItem.className = "card";

    var closeButton = document.createElement("span");
    closeButton.textContent = "×";
    closeButton.classList.add("close-btn");
    closeButton.addEventListener("click", function() {
      var index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
        renderCardItems(); // Render the updated cards
      }
    });
    cardItem.appendChild(closeButton);

    var cardImage = document.createElement("img");
    cardImage.src = "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13146286_XL1_20220802.jpg";
    cardItem.appendChild(cardImage);

    var cardContent = document.createElement("div");
    cardContent.className = "card-content";

    var cardTitle = document.createElement("h3");
    cardTitle.textContent = "Kitchen Towel";
    cardContent.appendChild(cardTitle);

    var cardDescription = document.createElement("p");
    cardDescription.textContent = "Scott Kitchen Towel Rolls";
    cardContent.appendChild(cardDescription);

    var cardPrice = document.createElement("p");
    cardPrice.textContent = "Price(CAD): 5";
    cardContent.appendChild(cardPrice);

    cardItem.appendChild(cardContent);
    cardContainer.appendChild(cardItem);

    // for airpods
        var cardItem = document.createElement("div");
        cardItem.className = "card";

        var closeButton = document.createElement("span");
        closeButton.textContent = "×";
        closeButton.classList.add("close-btn");
        closeButton.addEventListener("click", function() {
          var index = items.indexOf(item);
          if (index > -1) {
            items.splice(index, 1);
            renderCardItems(); // Render the updated cards
          }
        });
        cardItem.appendChild(closeButton);

        var cardImage = document.createElement("img");
        cardImage.src = "https://www.rollingstone.com/wp-content/uploads/2021/10/DSC_0212.jpg?w=1600&h=900&crop=1";
        cardItem.appendChild(cardImage);

        var cardContent = document.createElement("div");
        cardContent.className = "card-content";

        var cardTitle = document.createElement("h3");
        cardTitle.textContent = "Airpods Gen 3";
        cardContent.appendChild(cardTitle);

        var cardDescription = document.createElement("p");
        cardDescription.textContent = "Personalized Spatial Audio with dynamic head tracking places sounds all around you to create a three-dimensional listening experience for music, TV shows, movies, and more — immersing you in sounds from every direction so it feels like you're in your very own concert hall or theater.";
        cardContent.appendChild(cardDescription);

        var cardPrice = document.createElement("p");
        cardPrice.textContent = "Price(CAD): 169";
        cardContent.appendChild(cardPrice);

        cardItem.appendChild(cardContent);
        cardContainer.appendChild(cardItem);
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
  // cardItem.classList.add("fade-out");

  // cardItem.addEventListener("transitionend", function() {
      var card = button.parentNode;
      card.parentNode.removeChild(card);
  // });
}

function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";
  document.getElementById("image").value = "";
}

renderCardItems();;




