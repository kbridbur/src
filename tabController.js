window.onload = function(e) {
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
}

