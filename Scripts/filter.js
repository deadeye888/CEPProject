function query() {	
	var input;
	input = document.getElementById("search_archive");
	val = input.value.toUpperCase();
	posts = document.getElementsByClassName("post_container");
	for (var i = 0; i < posts.length; i++) {
		var title = posts[i].getElementsByTagName("h2")[0].textContent;
		var author = posts[i].getElementsByTagName("span")[0].textContent;
		var date = posts[i].getElementsByTagName("span")[1].textContent;
		var tags = posts[i].getElementsByTagName("p")[0].textContent.substring(9).split(', ');
		var valid = false;
		if (title.toUpperCase().includes(val) || author.toUpperCase().includes(val) || date.includes(val)) {
			valid = true;
		} else {
			for (var j = 0; j < tags.length; j++) {
				if (tags[j].toUpperCase().includes(val)) {
					valid = true;
				}
			}
		}
		posts[i].style.display = (valid ? "" : "none");
	}	
}
