// This is for form validation
function validate() {
    var yourName = document.getElementById("yourName");
    var yourEmail = document.getElementById("yourEmail");
    var yourNum = document.getElementById("yourNumber");
    var yourZip = document.getElementById("zipCode");
    var msg = document.getElementById("ValidateComment");
    if (!yourName.checkValidity() || !yourEmail.checkValidity() || !yourNum.checkValidity() || !yourZip.checkValidity()) {
        msg.innerHTML = "Please fill out the form correctly so we can add you to our mailing list!";
    }
}

// This code taken from https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// End of code taken from https://www.w3schools.com/howto/howto_js_slideshow.asp

// This is for DOM
function footerYear() {
    var date = new Date();
    var year = date.getFullYear();
    var rights = document.getElementById("rights");
    rights.innerHTML="&copy; "+year+rights.innerHTML;
}

// This is for jquery
$( function() {
    $( "#tabs" ).tabs();
  } );
