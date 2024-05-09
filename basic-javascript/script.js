function generateRandomColor() {
    var red = Math.floor(Math.random() * 256); // Random number between 0 and 255
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

document.getElementById("myButton").addEventListener("click", function () {
    var randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor; // Change background color of the body
});
z