
Util.events(document, {
    "DOMContentLoaded": function() {
        var fileTitle   = document.getElementsById("file-title");
        var dateTitle   = document.getElementsById("date-title");
        var uploadTitle = document.getElementsById("upload-title");

        

        fileTitle.addEventListener("click", function() {
        	this.classList.add("using");
        	dateTitle.classList.remove("using");
        	uploadTitle.classList.remove("using");
        	// add function here to filter by this depending on a state , down or up
        });

		
		dateTitle.addEventListener("click", function() {
        	this.classList.add("using");
        	fileTitle.classList.remove("using");
        	uploadTitle.classList.remove("using");
        	// add function here to filter by this depending on a state , down or up
        });

        uploadTitle.addEventListener("click", function() {
        	this.classList.add("using");
        	dateTitle.classList.remove("using");
        	fileTitle.classList.remove("using");
        	// add function here to filter by this depending on a state , down or up
        });

	    }
});