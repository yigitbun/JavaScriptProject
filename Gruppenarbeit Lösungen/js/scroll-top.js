/**
 * SCROLL TO TOP BUTTON
 * 1. add the class "visible" to the element with the id "return-to-top", when the user scrolled at least the window height
 * 2. when the user clicks the button, scroll the page all the way up to the start
 * 
 */

document.addEventListener('DOMContentLoaded', function() {

  let button = document.getElementById('return-to-top');
  
  button.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', function() {
    if (window.scrollY >= window.innerHeight) {
      button.classList.add('visible');
    } else {
      button.classList.remove('visible');
    }
  });

});