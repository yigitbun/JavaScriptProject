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

// function myFunction() {
//     var element = document.getElementById("menu");
//     element.classList.toggle("hidden");
//   }

// Bessere Version

const toggle  = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("menu");

toggle.addEventListener("click", function() {
    mobileMenu.classList.toggle("hidden")
  });

//   let a = 3;
// let b = 5;
// let template = `
//   <form action="/" id="fetch-form" method="POST">     // breaks can be used
//     <input id="input-${ a+b }" type="text">           // use variables inside template strings
//     <div id="output" data-number="23"></div>
//     <button id="submit">Klick mich!</button>
//   </form>`;
// console.log(template);

