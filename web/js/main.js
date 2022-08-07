var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}

mybutton = document.getElementById("up_btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// MODAL GALLERY
// ==================================================================================

var modal = document.getElementById("myModal");

var userSelection = document.getElementsByClassName('modals');

var previous = document.getElementById("previous");
var next = document.getElementById("next");


for(let i = 0; i < userSelection.length; i++) {
  userSelection[i].addEventListener("click", function() {

    document.body.style.overflow = "hidden";
    var modalImg = document.getElementById("modal_img");
    // data-img-id
    modal.style.display = "block";
    modalImg.src = userSelection[i].src;
    modalImg.setAttribute("data-img-id", i);
    if (i<1){
    previous.style.display = "none";
    next.style.display = "block";
  }else if (i>22){
    previous.style.display = "block";
    next.style.display = "none";
  }else{
    previous.style.display = "block";
    next.style.display = "block";
  }
})
}

document.getElementById("previous").onclick = function(){
  var modalImg = document.getElementById("modal_img");
  var i = parseInt(modalImg.getAttribute('data-img-id')) - 1;
  modalImg.setAttribute("data-img-id", i);
  modalImg.src = userSelection[i].src;
  if (i<1){
    previous.style.display = "none";
    next.style.display = "block";
  }else{previous.style.display = "block";
        next.style.display = "block";
  }
}

document.getElementById("next").onclick = function(){
  var modalImg = document.getElementById("modal_img");
  var i = parseInt(modalImg.getAttribute('data-img-id')) + 1;
  modalImg.setAttribute("data-img-id", i);
  modalImg.src = userSelection[i].src;
  if (i>22){
    next.style.display = "none";
    previous.style.display = "block";
  }else{next.style.display = "block";
        previous.style.display = "block";
  }
}

document.getElementById("close").onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "scroll";
}

// FORM VALIDATION
// ==================================================================================

function validate(){
            alert( "Please contact me through the main contact form" );
            return false;
      }

// RESPONSIVE MENU DROPDOWN
// ==================================================================================

var dropdown = document.getElementById("dropdown-content");

function menu(){
  if(dropdown.style.display === "block"){
    dropdown.style.display = "none";
  }else{
    dropdown.style.display = "block";
  }
}










