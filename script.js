var bookContainer = document.getElementById("bookContainer");
var delBtn = document.getElementById("delBtn");

// Event to hide the bookContainer
delBtn.addEventListener("click", function () {
  bookContainer.style.display = "none";
});

var addpopup = document.getElementById("add-popup");
var popuplayout = document.getElementById("popupLayout");
addpopup.addEventListener("click", function () {
  popuplayout.style.display = "block";
});

// Event to hide the popup when cancel button is clicked
var cancelBtn = document.getElementById("cancel");
cancelBtn.addEventListener("click", function (event) {
  event.preventDefault();
  popuplayout.style.display = "none";
});

// Click event for the add button to add the book information to the container
var container = document.querySelector(".container");
var bookTitle = document.querySelector(".book-title");
var bookAuthor = document.querySelector(".book-author");
var bookDescription = document.querySelector(".short-discription");
var add = document.querySelector(".add");

add.addEventListener("click", function (event) {
  event.preventDefault();
  //creating new div tag for the new book-container
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");

  div.innerHTML = `
    <h2>${bookTitle.value}</h2>
    <h4>${bookAuthor.value}</h4>
    <p>${bookDescription.value}</p>
    <button class="delBtn">Delete</button>
  `;

  container.append(div);
  popuplayout.style.display = "none";
  bookTitle.value = "";
  bookAuthor.value = "";
  bookDescription.value = "";

  // Adding delete functionality for dynamically created delete buttons
  var deleteBtn = div.querySelector(".delBtn");
  deleteBtn.addEventListener("click", function () {
    div.remove(); // Remove the book container when delete is clicked
  });
});
