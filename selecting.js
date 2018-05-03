dom = {}
tagToggles = {}
fileToggles = {}

var emptyCheck = "images/checkbox.png";
var hoverCheck = "images/checkbox-quarter-filled.png";
var filledCheck = "images/checked.png";


Util.events(document, {
    "DOMContentLoaded": function() {
        dom.selectAll = Util.one("#selectAll");
        dom.deselectAll = Util.one("#deselectAll");
        dom.classifiers = Util.all(".classifier");

        // select all files
        dom.selectAll.addEventListener( 'click', function() {
        	var allFiles = Util.all(".result-file");
        	// console.log(allFileCheckboxes);
		    for (var i = 0; i < allFiles.length; i++) {
		    	allFiles[i].children[0].children[0].src = filledCheck;
                fileToggles[allFiles[i].id] = true;
		    }
		});

        // deselect all files
        dom.deselectAll.addEventListener( 'click', function() {
        	var allFiles = Util.all(".result-file");
        	// console.log(allFileCheckboxes);
		    for (var i = 0; i < allFiles.length; i++) {
		    	allFiles[i].children[0].children[0].src = emptyCheck;
                fileToggles[allFiles[i].id] = false;
		    }
		});

        // listeners for classifiers
        for (var i = 0; i < dom.classifiers.length; i++) {
            classifier = dom.classifiers[i];
            tagToggles[classifier.id] = false;

            classifier.addEventListener( 'click', function() {
                var checkbox = this.children[0];
                toggle = !tagToggles[this.id];
                checkbox.src = toggle ? filledCheck : emptyCheck;
                tagToggles[this.id] = toggle;
            });

            classifier.addEventListener( 'mouseenter', function() {
                if (!tagToggles[this.id]) {this.children[0].src = hoverCheck};
            })

            classifier.addEventListener( 'mouseleave', function() {
                if (!tagToggles[this.id]) {this.children[0].src = emptyCheck};
            })
        }

        setTimeout(fileSelect, 200);

    }
});

// listeners for files
function fileSelect() {
    dom.files = Util.all(".result-file");
    for (var i = 0; i < dom.files.length; i++) {
        file = dom.files[i];
        fileToggles[file.id] = false;

        file.addEventListener( 'click', function() {
            var checkbox = this.children[0].children[0];
            toggle = !fileToggles[this.id];
            checkbox.src = toggle ? filledCheck : emptyCheck;
            fileToggles[this.id] = toggle;

            var img = document.getElementById("preview-image");
            var description = document.getElementById("preview-description");
            var imgPlacehold = document.getElementById("img-placeholder");

            if (Object.values(fileToggles).indexOf(true) > -1) {
                img.src = "graphics/sadoak.jpg";
                description.innerHTML = "I'm a description";
                imgPlacehold.innerHTML = "";
            } else {
                img.src = "";
                description.innerHTML = "";
                imgPlacehold.innerHTML = "No file selected";
            }
        });

        file.addEventListener( 'mouseenter', function() {
            if (!fileToggles[this.id]) {this.children[0].children[0].src = hoverCheck};
        })

        file.addEventListener( 'mouseleave', function() {
            if (!fileToggles[this.id]) {this.children[0].children[0].src = emptyCheck};
        })
    }
}
