/**
 * VALIDATE & SEND FORM
 * 1. Listen to the submit of the form element with the id "support-form"
 * 2. Validate on submit, that:
 *  2.1 the checkbox with the id "input-privacy" is checked
 *  2.2 all other inputs are not empty. If they're empty, add the class "border-red-500" to every empty input
 * 3. Send the form with the library axios as an POST REQUEST to https://hsh.blnq.dev/javascript-basics/form-fetch.php
 * 
 * https://github.com/axios/axios
 * 
 */



// Lösungen
//  1. Listen to the submit of the form element with the id "support-form"

const form = document.getElementById("support-form");
const checkbox = document.getElementById("input-privacy");

form.addEventListener('submit',function(e){
    e.preventDefault(); // Cancel the native event
    if (checkbox.checked = false) {
       alert("sadsa");
    }
});


// var confirm=document.getElementById("submit").value;
//          if((confirm.checked==false)
//          {
//          alert("plz check the checkbox field");
//          document.getElementbyId("confirm").focus();
//          return false;
//          }

// 2. Validate on submit, that:
// 2.1 the checkbox with the id "input-privacy" is checked


// const checkbox = document.getElementById("checkbox")
// checkbox.checked = true;
     

// 2.2 all other inputs are not empty. If they're empty, add the class "border-red-500" to every empty input


// window.addEventListener('load', ()=>{

//     const form = document.querySelector('form');
//     form.addEventListener('submit', (e)=>{
//         //to prevent reload
//         e.preventDefault();
//         //creates a multipart/form-data object
//         let data = new FormData(form);
//         axios({
//             method  : 'post',
//             url : 'https://hsh.blnq.dev/javascript-basics/form-fetch.php',
//             data : data,
//         })
//             .then((res)=>{
//                 console.log(res);
//             })
//             .catch((err) => {throw err});
//     });
// });