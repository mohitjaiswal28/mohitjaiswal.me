
// Author - Mohit Jaiswal


// When you refresh/reload -> goes to home page
window.onload = function() {
  window.setTimeout(
      function() { window.scrollTo(0,0); },
      10
  );
};


// Navbar hamburger toggle closes when you select an option
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});


// AOS
AOS.init();


// Naviagtion Bar Settings
var navbarItems = document.querySelectorAll('.navbar-nav .nav-link');

navbarItems.forEach(function(item) {
item.addEventListener('click', function() {
  navbarItems.forEach(function(navbarItem) {
    navbarItem.classList.remove('active');
  });
  item.classList.add('active');
});
});