dom = {}
tagToggles = {}
fileToggles = {}

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
            tagToggles[classifier.id] = false;
            classifier.addEventListener( 'click', function() {
                var checkbox = this.children[0];
                toggle = !tagToggles[this.id];
                checkbox.checked = toggle;
                tagToggles[this.id] = toggle;
            });
            console.log(tagToggles);
        }

        setTimeout(fileSelect, 200);

    }
});

function fileSelect() {
    dom.files = Util.all(".result-file");
    for (var i = 0; i < dom.files.length; i++) {
        file = dom.files[i];
        fileToggles[file.id] = false;
        file.addEventListener( 'click', function() {
            var checkbox = this.children[0].children[0];
            toggle = !fileToggles[this.id];
            checkbox.checked = toggle;
            fileToggles[this.id] = toggle;
        });
    }
}