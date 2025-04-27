window.addEventListener('scroll', function() {
  var button = document.getElementById('scrollTopButton');
  if (window.scrollY > 0) {
    button.classList.add('show');
  } else {
    button.classList.remove('show');
  }
});


// JavaScript to smoothly scroll to the top when the button is clicked
document.getElementById("scrollTopButton").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
