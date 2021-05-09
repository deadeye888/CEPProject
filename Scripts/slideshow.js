const images = document.querySelectorAll(".banner");
const delay = 1500;
var counter = 0;

images[counter].style.opacity = 1;

setInterval(change_image, delay);

function change_image() {
	images[counter].style.opacity = 0;
	counter = (counter + 1) % images.length;
	images[counter].style.opacity = 1;
}