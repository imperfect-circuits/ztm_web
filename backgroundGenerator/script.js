var leftColorInput = document.getElementById("leftColor");
var rightColorInput = document.getElementById("rightColor");
var description = document.getElementById("cssStyleDescription");
var randomColor = document.getElementById("randomiseColor");
var background = document.querySelector("body");

// supporting functions
function updateColor() {
    background.style.backgroundImage = `linear-gradient(to right, ${leftColorInput.value}, ${rightColorInput.value})`;
    description.textContent = background.style.backgroundImage;
}
function randomHexValue() {
    return Math.floor(Math.random()*256).toString(16);
}
function randomiseColor() {
    leftColorInput.value = '#'+randomHexValue()+randomHexValue()+randomHexValue();
    rightColorInput.value = '#'+randomHexValue()+randomHexValue()+randomHexValue();
    updateColor();
}

// starting values for the inputs
leftColorInput.value = "#66AEE5";
rightColorInput.value = "#DE2E02";
updateColor();

// add listeners for the color pickers
leftColor.addEventListener("input", updateColor);
rightColor.addEventListener("input", updateColor);
randomColor.addEventListener("click", randomiseColor);
