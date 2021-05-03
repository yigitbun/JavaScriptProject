/**
 * CSS-ANIMATIONS
 * Toggle the class "hidden" from the element with the id "menu", when the user clicks on the element with the id "menu-btn"
 * 
 */



// Erste Lösung
//  var button = document.getElementById('menu-btn');

//  button.onclick = function() {
//      var div = document.getElementById('menu');
//      if (div.style.display !== 'none') {
//          div.style.display = 'none';
//      }
//      else {
//          div.style.display = 'block';
//      }
//  };


// Zweite Lösung - JavaScript - Toggle Element.style
// https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style


// var toggle  = document.getElementById("menu-btn");
// var openMenu = document.getElementById("menu");

// toggle.addEventListener("click", function() {
//   openMenu.style.display = (openMenu.dataset.toggled ^= 1) ? "block" : "none";
// });


// Dritte Lösung - JavaScript - Toggle .classList.toggle()


// var toggle  = document.getElementById("menu");
// var openMenu = document.getElementById("menu-btn");

// toggle.addEventListener("click", function() {
//     openMenu.classList.toggle("show");
// });


function myFunction() {
    var element = document.getElementById("menu");
    element.classList.toggle("hidden");
  }