const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

document.addEventListener('DOMContentLoaded', function() {
  var smoothScrollLinks = document.getElementsByClassName('smooth-scroll');
  for (var i = 0; i < smoothScrollLinks.length; i++) {
    smoothScrollLinks[i].addEventListener('click', function(event) {
      event.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      target.style.opacity = "1";
      target.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
