/**
 * SLIDER WITH SWIPERJS
 * 1. Read the get started guide at https://swiperjs.com/get-started/
 * 2. Initialize the swiper element with the class ".swiper-container" with pagination as type fraction
 * 
 * https://swiperjs.com/api/
 * https://swiperjs.com/demos/
 * 
 */

document.addEventListener('DOMContentLoaded', function() {

  let swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

});