var leftColorInput = document.getElementById("leftColor");
var rightColorInput = document.getElementById("rightColor");
var description = document.getElementById("cssStyleDescription");
var background = document.getElementsByTagName("body")[0];

// supporting functions
function setDescription(value) {
    description.replaceChildren(document.createTextNode(value));
}
function updateColor(event) {
    background.style.backgroundImage = `linear-gradient(to right, ${leftColorInput.value}, ${rightColorInput.value})`;
    setDescription(background.style.backgroundImage);
}

// starting values for the inputs
leftColorInput.value = "#66AEE5";
rightColorInput.value = "#DE2E02";
updateColor(null);

// add listeners for the color pickers
leftColor.addEventListener("input", updateColor);
rightColor.addEventListener("input", updateColor);
