let height = window.innerHeight - 96;
let mainPage = document.getElementsByClassName("main-page")[0];
let imageDiv = document.getElementsByClassName("image-container")[0];
let mobileImageDiv = document.getElementsByClassName("mobile-image-container")[0];
let images = document.getElementsByClassName("image");
let mobileImages = document.getElementsByClassName("mobile-image");
let mobileImageTexts = document.getElementsByClassName("mobile-image-text");
let imagesLength = images.length;
let mobileImagesLength = mobileImages.length;
let imageInterval;
let autoplay = 3000;
let counter = 0;
let mobileCounter = 0;
mainPage.style.height = height + "px";
imageDiv.style.height = height + "px";
mobileImageDiv.style.height = height + "px";

imageInterval = window.setInterval(() => {
	images[counter].classList.remove("active");
	mobileImages[mobileCounter].classList.remove("active");
	mobileImageTexts[mobileCounter].classList.remove("active");
	counter = (counter + 1) % imagesLength;
	mobileCounter = (mobileCounter + 1) % mobileImagesLength;
	images[counter].classList.add("active");
	mobileImages[mobileCounter].classList.add("active");
	mobileImageTexts[mobileCounter].classList.add("active");
}, autoplay);
