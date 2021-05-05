/**
 * CSS-ANIMATIONS
 * 1. Toggle the class "hidden" from the searchbar element, when the user clicks search button
 * 2. Clear the input by clicking the "x" button
 * 
 */

document.addEventListener('DOMContentLoaded', function() {
  
  document.querySelector('.search-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('searchbar').classList.toggle('hidden');
  });

  document.querySelector('#searchbar svg').addEventListener('click', function() {
    document.querySelector('#searchbar input').value = null;
  });

});