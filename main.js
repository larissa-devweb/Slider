const nextEl = document.getElementById('next');
const previousEl = document.getElementById('previous');
const sliderEl = document.getElementById('slider');
const imageWidth = sliderEl.offsetWidth;

nextEl.addEventListener('click', onNextClick);
previousEl.addEventListener('click', onPreviousClick);


function onNextClick() {
  sliderEl.scrollLeft += imageWidth;
}

function onPreviousClick() {
  sliderEl.scrollLeft -= imageWidth;
}
