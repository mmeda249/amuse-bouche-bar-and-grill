// Back-to-Top button
mybutton = document.getElementById("topBtn");

// When the user scrolls 600px down from the top of the page, the button will appear
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scrolls back to top of page when user clicks the button
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Internet Explorer & Firefox
  document.body.scrollTop = 0; // For Safari
}

// When the user clicks a link from the navigation toggler, the nav will collapse again
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});
