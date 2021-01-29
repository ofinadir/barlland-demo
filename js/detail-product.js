let thumbnails = document.querySelectorAll('.product-thumbnail');
let activeImages = document.getElementsByClassName('active-image');

for (let i = 0; i < thumbnails.length; i++) {

  thumbnails[i].addEventListener('mouseover', function () {
    if (activeImages.length > 0) {
      activeImages[0].classList.remove('active-image')
    }
    this.classList.add('active-image')
    document.querySelector('#featured').src = this.src
  })
}

$(document).ready(function () {
  $('#content-slider').lightSlider({
    autoWidth: true,
    loop: false,
    slideEndAnimation: false,
    slideMargin: false,
    speed: 200,
    enableTouch: true,
    pager: false,
  });
});

// let buttonLeft = document.querySelector('#arrowLeft');
// let buttonRight = document.querySelector('#arrowRight');

// buttonLeft.addEventListener('click', function () {
//   document.getElementById('slider').scrollLeft -= 180;
// })

// buttonRight.addEventListener('click', function () {
//   document.getElementById('slider').scrollLeft += 180;
//   console.log(buttonLeft)
// })
