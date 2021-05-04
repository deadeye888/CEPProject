function query() {
	var input, filter;
	input = document.getElementById("search_archive");
	filter = input.value.toUpperCase();
	results = document.getElementById(input);
}

function change_text() {
	document.getElementById("search_archive").setAttribute("placeholder", "E.g. World Cup 2018, FC Barcelona");
}