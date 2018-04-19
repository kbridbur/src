window.onload = function(e) {
	var i;
	var accordions = document.getElementsByClassName("accordion");

	for (i = 0; i < accordions.length; i++ ) {
		accordions[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			var tagsInField = panel.children.length;
			var odd;
			if (tagsInField % 2 == 0) {
				odd = 0.5;
			} else {
				odd = 1;
			}
			var margin = 5;
			var sizeOfPanel = tagsInField * (panel.children[1].clientHeight) + (tagsInField - odd) * (margin * 2);
			console.log(sizeOfPanel);
			if (window.getComputedStyle(panel).getPropertyValue('height') == "0px") {
				panel.style.height = sizeOfPanel+"px";
			} else {
				panel.style.height = "0px";
			}
		});
	}

}
