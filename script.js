var idx = 1;

function change_image() {
	var element = document.getElementById("header");
	var gradient = "linear-gradient(rgba(0,10,30,0.7),rgba(0,10,30,0.7))"
	element.style.backgroundImage = `${gradient},url(images/banner${idx}.jpeg)`;
	idx = (idx == 5 ? 1 : idx + 1);
	setTimeout("change_image()", 2000);
}

function query() {
	var input, filter;
	input = document.getElementById("search_archive");
	filter = input.value.toUpperCase();
	results = document.getElementById(input);
}

window.onload = change_image();