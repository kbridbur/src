window.onload = function(e) {
	var i;
	var accordions = document.getElementsByClassName("accordion");

	for (i = 0; i < accordions.length; i++ ) {
		accordions[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			console.log(panel);
			if (window.getComputedStyle(panel).getPropertyValue('height') == "0em") {
				panel.style.height = "2.5em";
			} else {
				panel.style.height = "0em";
			}
		});
	}

}
