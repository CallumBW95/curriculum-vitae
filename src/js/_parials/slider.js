const slideLeft = () => {
  const slider = document.querySelector('.slider__slides');
  // add first to last place
  slider.appendChild(document.querySelector('.slider__slide').cloneNode(true));

  // change active to prev
  slider.querySelector('.slider__slide--active').classList.add('slider__slide--prev');
  slider.querySelector('.slider__slide--active').classList.remove('slider__slide--active');
  
  // change prev to standard slide
  slider.querySelector('.slider__slide--prev').classList.remove('slider__slide--prev');
  
  // change next to active
  slider.querySelector('.slider__slide--next').classList.add('slider__slide--active');
  slider.querySelector('.slider__slide--next').classList.remove('slider__slide--next');
  
  // change the second last (oringal last) to next
  slider.querySelector('.slider__slide:nth-last-child(2)').classList.add('slider__slide--next');
  
  // remove first (surplus)
  slider.querySelector('.slider__slide:first-child').remove()
}

const slideRight = () => {
  const slider = document.querySelector('.slider__slides');

  // add last to first place
  slider.prepend(document.querySelector('.slider__slide:last-child').cloneNode(true));
  
  // change next to standard slide
  slider.querySelector('.slider__slide--next').classList.remove('slider__slide--next');

  // change active to next
  slider.querySelector('.slider__slide--active').classList.add('slider__slide--next');
  slider.querySelector('.slider__slide--active').classList.remove('slider__slide--active');

  // change next to active
  slider.querySelector('.slider__slide--prev').classList.add('slider__slide--active');
  slider.querySelector('.slider__slide--prev').classList.remove('slider__slide--prev');

  
  // change the second last (oringal last) to next
  slider.querySelector('.slider__slide:nth-child(2)').classList.add('slider__slide--prev');
  
  // remove first (surplus)
  slider.querySelector('.slider__slide:last-child').remove()
}

document.querySelector('.slider__next').addEventListener('click', slideLeft);
document.querySelector('.slider__prev').addEventListener('click', slideRight);