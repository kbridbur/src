window.onload = function(e) {
	var i;
	var accordions = document.getElementsByClassName("accordion");

	for (i = 0; i < accordions.length; i++ ) {
		accordions[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			var tagsInField = panel.childNodes.length;
			var sizeOfPanel = tagsInField * panel.childNodes[1].clientHeight;
			if (window.getComputedStyle(panel).getPropertyValue('height') == "0px") {
				panel.style.height = sizeOfPanel+"px";
			} else {
				panel.style.height = "0px";
			}
		});
	}

}
