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
	closeButton.addEventListener("click",deleteListItem);
	li.appendChild(closeButton);

	// add toggle to show if item is done
	li.addEventListener("click", markAsDone);

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
	event.target.classList.toggle("done");
}

function deleteListItem(event) {
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

// add event listeners to the list items and close buttons
for (child of ul.children) {
	// add 'done' toggle to item
	child.addEventListener("click", markAsDone);
};
for (closeButton of document.querySelectorAll("ul li button")) {
	// add 'done' toggle to item
	closeButton.addEventListener("click", deleteListItem);
};