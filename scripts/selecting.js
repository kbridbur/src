var emptyCheck = "images/checkbox.png";
var hoverCheck = "images/checkbox-quarter-filled.png";
var filledCheck = "images/checked.png";

function selectAllHandler() {
    var allFiles = Util.all(".result-file");
    var btn = Util.one("#selectAll");
    if (toggler) {
        btn.innerText="Deselect All";
    } else {
        btn.innerText="Select All";
    }
    for (var i = 0; i < allFiles.length; i++) {
        if (toggler) {
            allFiles[i].children[0].src = filledCheck;
            fileToggles[allFiles[i].id] = true;

        } else {
            allFiles[i].children[0].src = emptyCheck;
            fileToggles[allFiles[i].id] = false;

        }
    }
    if (fileToggles[allFiles[0].id]){
            btn.src = filledCheck;
    }
    else{
        btn.src = emptyCheck;
    }
    toggler = !toggler;
}

function addClassifierListeners() {
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
}

// listeners for files
function fileSelect() {
    dom.files = Util.all(".result-file");
    for (var i = 0; i < dom.files.length; i++) {
        file = dom.files[i];
        fileToggles[file.id] = false;

        file.addEventListener( 'click', function() {
            var checkbox = this.children[0];
            toggle = !fileToggles[this.id];
            checkbox.src = toggle ? filledCheck : emptyCheck;
            fileToggles[this.id] = toggle;

            var check = Object.keys(fileToggles).filter(i => fileToggles[i] == false);
            if (check.length > 0){
                dom.selectAll.src = emptyCheck;
            }
            else {
                dom.selectAll.src = filledCheck;
            }

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
            if (!fileToggles[this.id]) {this.children[0].src = hoverCheck};
        })

        file.addEventListener( 'mouseleave', function() {
            if (!fileToggles[this.id]) {this.children[0].src = emptyCheck};
        })
    }
}
