dom = {}

Util.events(document, {
    "DOMContentLoaded": function() {
        dom.selectAll = Util.one("#selectAll");
        dom.deselectAll = Util.one("#deselectAll");

        dom.selectAll.addEventListener( 'click', function() {
        	var allFileCheckboxes = Util.all(".result-file-checkbox");
        	console.log(allFileCheckboxes);
		    for (var i = 0; i < allFileCheckboxes.length; i++) {
		    	allFileCheckboxes[i].checked = true;
		    }
		});

        dom.deselectAll.addEventListener( 'click', function() {
        	var allFileCheckboxes = Util.all(".result-file-checkbox");
        	console.log(allFileCheckboxes);
		    for (var i = 0; i < allFileCheckboxes.length; i++) {
		    	allFileCheckboxes[i].checked = false;
		    }
		});
    }
});