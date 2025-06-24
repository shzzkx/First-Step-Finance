//CHANGING QUOTES
//arrays
const quotes = [];
quotes[0] =
  '"Empty pockets never held anyone back. Only empty heads and empty hearts can do that."';
quotes[1] = '"An investment in knowledge pays the best interest."';
quotes[2] = '"The mind is not a vessel to be filled but a fire to be kindled."';
quotes[3] = '"Money grows on the tree of persistence."';
quotes[4] =
  '"If we command our wealth, we shall be rich and free. If our wealth commands us, we are poor indeed."';
quotes[5] = '"Money is a terrible master but an excellent servant."';
quotes[6] =
  '"You can be young without money, but you can\'t be old without it."';
quotes[7] = '"Fortune befriends the bold."';
quotes[8] = '"We generate fears while we sit. We overcome them by action."';
const credits = [];
credits[0] = "Norman Vincent Peale";
credits[1] = "Benjamin Franklin";
credits[2] = "Plutarch";
credits[3] = "Japanese proverb";
credits[4] = "Edmund Burke";
credits[5] = "P. T. Barnum";
credits[6] = "Tennessee Williams";
credits[7] = "Emily Dickinson";
credits[8] = "Dr. Henry Link";
//get random index
var random = Math.floor(Math.random() * quotes.length);
document.getElementById("quote").innerHTML = quotes[random];
document.getElementById("credit").innerHTML = credits[random];

//TOPICS SLIDESHOW
let slideIndex = 1;
showSlide(slideIndex);

//for changing the slide
function changeSlide(n) {
  showSlide((slideIndex += n));
}

//for showing the slide
function currentSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//shows slide initially
showSlide(slideIndex);
