
const moment = require('moment');
/* ------------------------  NPM moment ---------------------------
*/
moment.locale('de');
//<script >

var revdate; 
revdate = document.getElementById("Revolutiontime");
if  (revdate != null) {
revdate.innerHTML = moment("18480101", "YYYYMMDD").fromNow();
revdate.style.display = "block";
}






/* ------------------------  modal light box ---------------------------
*/

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}


// ------------------------    Modal ---------------------------- 

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var area = document.getElementById("myClick");
var img = document.getElementById("myImg");
if (img == null) {
  img = document.getElementById("myAffe");
}

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
if (area != null) {
  area.onclick = function () {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  };
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
if (span != null) {
  span.onclick = function () {
    modal.style.display = "none";
  };
}
//------------------------    Modal End ----------------------------


//------------------------  Common functions ---------------------------

function OpenNewWindow(link, wdw, x, y, l, t) {
  top.newWin = window.open(link,
    wdw,
    'dependent=yes,width=' + x + ',height=' + y + ',left=' + l + ',top=' + t + ',titlebar=no,resizable=no, scrolbars=no, status = no');
}
