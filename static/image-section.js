let coordinate = 0;
let images = document.getElementsByClassName("image");
let mobileImages = document.getElementsByClassName("mobile-image");
let imagesLength = images.length;
let mobileImagesLength = mobileImages.length;
let intervalId = null;
let autoplay = 3000;
let counter = 0;
let mobileCounter = 0;

intervalId = window.setInterval(() => {
	images[counter].classList.remove("active");
	mobileImages[counter].classList.remove("active");
	counter = (counter + 1) % imagesLength;
	mobileCounter = (mobileCounter + 1) % mobileImagesLength;
	images[counter].classList.add("active");
	mobileImages[mobileCounter].classList.add("active");
}, autoplay);
