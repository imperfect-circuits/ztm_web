var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	// create list element
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));

	// create button to add to list element for closure
	var closeButton = document.createElement("button");
	closeButton.appendChild(document.createTextNode("X"));
	li.appendChild(closeButton);

	// add to list
	ul.appendChild(li);

	// clear current input
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markAsDone(event) {
	// console.log(`markAsDone ${event.target.nodeName}`);
	// skip if target is not a list item
	if (event.target.nodeName !== 'LI') {
		return;
	}
	event.target.classList.toggle("done");
}

function deleteListItem(event) {
	// console.log(`deleteListItem ${event.target.nodeName}`);
	// skip if target is not the close button
	if (event.target.nodeName !== 'BUTTON') {
		return;
	}
	// don't delete if the line is not marked as done
	var currentListItem = event.target.parentElement;
	if (!currentListItem.classList.contains("done")) {
		alert("Can't remove item if not done.");
		return;
	}
	ul.removeChild(currentListItem);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", markAsDone);
ul.addEventListener("click", deleteListItem);