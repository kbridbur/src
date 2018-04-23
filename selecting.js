dom = {}

Util.events(document, {
    "DOMContentLoaded": function() {
        dom.selectAll = Util.one("#selectAll");
        dom.deselectAll = Util.one("#deselectAll");
        dom.classifiers = Util.all(".classifier");

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

        for (var i = 0; i < dom.classifiers.length; i++) {
            classifier = dom.classifiers[i];
            classifier.addEventListener( 'click', function() {
                var checkbox = this.children[0];
                toggle = checkbox.checked == true ? false : true;
                checkbox.checked = toggle;
            });
        }

        setTimeout(fileSelect, 200);

    }
});

function fileSelect() {
    dom.files = Util.all(".result-file");
    for (var i = 0; i < dom.files.length; i++) {
        file = dom.files[i];
        file.addEventListener( 'click', function() {
            var checkbox = this.children[0].children[0];
            toggle = checkbox.checked == true ? false : true;
            checkbox.checked = toggle;
        });
    }
}