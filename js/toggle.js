function myFunction1() {
    var dots = document.getElementById("dot1");
   var moreText = document.getElementById("more1");
   var button = document.getElementById("button1");

   if (dots.style.display === "none") {
dots.style.display = "inline";
button.innerHTML = "Read more";
moreText.style.display = "none";
} else {
dots.style.display = "none";
button.innerHTML = "Read less";
moreText.style.display = "inline";
moreText.style.transition = "height 4s;";
}
}

function myFunction2() {
    var dots = document.getElementById("dot2");
   var moreText = document.getElementById("more2");
   var button = document.getElementById("button2");

   if (dots.style.display === "none") {
dots.style.display = "inline";
button.innerHTML = "Read more";
moreText.style.display = "none";
} else {
dots.style.display = "none";
button.innerHTML = "Read less";
moreText.style.display = "inline";
}
}

function myFunction3() {
    var dots = document.getElementById("dot3");
   var moreText = document.getElementById("more3");
   var button = document.getElementById("button3");

   if (dots.style.display === "none") {
dots.style.display = "inline";
button.innerHTML = "Read more";
moreText.style.display = "none";
} else {
dots.style.display = "none";
button.innerHTML = "Read less";
moreText.style.display = "inline";
}
}