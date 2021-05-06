/**
 * SCROLL TO TOP BUTTON
 * 1. add the class "visible" to the element with the id "return-to-top", when the user scrolled at least the window height
 * 2. when the user clicks the button, scroll the page all the way up to the start
 * 
 */

 
// let button = document.getElementById('return-to-top');

//     button.addEventListener('click', function(){
//         window.scrollTo({ 
//             top: 0, behavior: 'smooth' 
//         })

//     });

document.addEventListener('DOMContentLoaded', function() {

    //Get the button:
    let mybutton = document.getElementById("return-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {

        if (window.scrollY > window.innerHeight) {
            mybutton.classList.add('visible');
        } else {
            mybutton.classList.remove('visible');

        }
    };

    // || document.documentElement.scrollTop > window.innerHeight
    window.addEventListener('click', function(){
        window.scrollTo({
            top: 0, behavior: 'smooth'
        });
        // document.body.scrollTop = 0; // For Safari
        // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    })
   
    

    // When the user clicks on the button, scroll to the top of the document
    // function topFunction() {
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    // }
});