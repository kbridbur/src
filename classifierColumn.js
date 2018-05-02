window.onload = function(e) {
	// view controller
	var tabs = document.getElementsByClassName("views-btn");

	function switchActiveTab(tabClicked) {
		for (var i = 0; i < tabs.length; i++) {
			tabs[i].classList.remove("active-tab");
		}
		tabClicked.classList.add("active-tab");

		// add function here to display proper stuff in the main col related to the active-tab
	}

	for (var i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener("click", function() {
			switchActiveTab(this);
		});
	}

	// accordion
	var i;
	var accordions = document.getElementsByClassName("accordion");
	var accordionSearches = document.getElementsByClassName("classifier-search");
	for (i = 0; i < accordionSearches.length; i++ ) {
		accordionSearches[i].addEventListener("click", function(e) {
			console.log("Search clicked");
			e.stopPropagation();
		});
	}

	for (i = 0; i < accordions.length; i++ ) {
		accordions[i].addEventListener("click", function(e) {
			console.log(e);
			this.classList.toggle("active");
			var animationTime = 400;
			var panel = this.nextElementSibling;
			var tagsInField = panel.children.length;
			var buttonSpan = this.children[0];
			var searchBar = this.children[1];
			var odd;
			if (tagsInField % 2 == 0) {
				odd = 0.5;
			} else {
				odd = 1;
			}
			var margin = 5;
			var sizeOfPanel = tagsInField * (panel.children[1].clientHeight) + (tagsInField - odd) * (margin * 2);
			// console.log(sizeOfPanel);

			if (window.getComputedStyle(panel).getPropertyValue('height') == "0px") {
				panel.style.height = sizeOfPanel+"px";
				buttonSpan.innerText = buttonSpan.innerText + " :";
				searchBar.style.display = "inline-block";
				searchBar.classList.add("fade-in");
				setTimeout(function(){searchBar.classList.remove("fade-in")}, animationTime);
				searchBar.focus();
			} else {
				searchBar.classList.add("fade-out");
				panel.style.height = "0px";
				setTimeout(
				function(){
					searchBar.classList.remove("fade-out"); 
					searchBar.style.display="none";
					buttonSpan.innerText = buttonSpan.id.substring(0, buttonSpan.id.length - 12);
				}, animationTime);
			}
		});
	}
	loadFiles()
}
