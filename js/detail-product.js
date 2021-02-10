document.addEventListener('DOMContentLoaded', function () {

  let secondarySlider = new Splide('#secondary-slider', {
    fixedWidth: '5rem',
    height: '5rem',
    gap: 8,
    rewind: true,
    cover: true,
    pagination: false,
    isNavigation: true,
    breakpoints: {
      '600': {
        fixedWidth: 66,
        height: 40,
      }
    }
  }).mount();

  let primarySlider = new Splide('#primary-slider', {
    type: 'slide',
    heightRatio: 1,
    pagination: true,
    arrows: false,
    cover: true,
  });

  primarySlider.sync(secondarySlider).mount();
});