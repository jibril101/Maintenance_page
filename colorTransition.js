document.addEventListener("DOMContentLoaded", function() {
    var colors = ["#9c5656","#000","#526dbd"];
    var body = document.querySelector("body");

    setInterval(function() {
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        body.style.backgroundColor = randomColor;
    }, 3200); // Set the interval to 60,000 milliseconds (1 minute)
});
