let slide = document.getElementsByClassName("slide")[0];
let text = document.getElementsByClassName("text");
let textCounter = 0;
let slideInterval;
slide.style.height = height + "px";

for (let i = 0; i < text.length; i++) {
	text[i].style.lineHeight = height + "px";
}

slideInterval = window.setInterval(() => {
	if (textCounter < text.length - 1) {
		text[textCounter].classList.remove("active-text");
		textCounter += 1;
		text[textCounter].classList.add("active-text");
	} else {
		mainPage.style.display = "block";
		slide.remove();
		clearInterval(slideInterval);
	}
}, 250);
