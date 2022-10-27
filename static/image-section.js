let coordinate = 0;
let images = document.getElementsByClassName("image");
let imagesLength = images.length;
let intervalId = null;
let autoplay = 5000;
let counter = 0;

intervalId = window.setInterval(() => {
	images[counter].classList.remove("active");
	counter = (counter + 1) % imagesLength;
	images[counter].classList.add("active");
}, autoplay);
