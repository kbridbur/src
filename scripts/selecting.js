var emptyCheck = "images/checkbox.png";
var hoverCheck = "images/checkbox-quarter-filled.png";
var filledCheck = "images/checked.png";

function checkForToggles(){
    for (var i=0; i<Object.keys(fileToggles).length; i++){
        if (fileToggles[dom.files[i].id]){
            for (var i=0; i<dom.optionBoxes.children.length; i++){
                dom.optionBoxes.children[i].disabled = false;
            }
            return;
        }
    }
    for (var i=0; i<dom.optionBoxes.children.length; i++){
        dom.optionBoxes.children[i].disabled = true;
    }
}

function selectAllHandler() {
    var allFiles = Util.all(".result-file");
    var btn = Util.one("#selectAll");
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
    checkForToggles();
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

            showSpecialFiles(this, this.id.split("-")[0])

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
    console.log(dom.files.length);
    for (var i = 0; i < dom.files.length; i++) {
        file = dom.files[i];
        fileToggles[file.id] = false;
        fileRecentClick[file.id] = false;
        numRecentClicks[file.id] = 0;
        file.addEventListener( 'click', function() {
            var a = this;
            numRecentClicks[file.id]++;
            console.log(numRecentClicks[file.id]);
            if (numRecentClicks[file.id] == 1){
                singleClickTimer = setTimeout(function(){
                    numRecentClicks[file.id] = 0;
                    var checkbox = a.children[0];
                    toggle = !fileToggles[a.id];
                    checkbox.src = toggle ? filledCheck : emptyCheck;
                    fileToggles[a.id] = toggle;

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
                        var lower = Util.one("#lower");
                        lower.style.gridTemplateColumns = "18vw 60vw 22vw";
                        console.log(lower);
                    } else {
                        img.src = "";
                        description.innerHTML = "";
                        imgPlacehold.innerHTML = "No file selected";
                        var lower = Util.one("#lower");
                        lower.style.gridTemplateColumns = "18vw 82vw";
                        console.log(lower);
                    }
                    checkForToggles();
                }, 150, a);
            }
            if (numRecentClicks[file.id] == 2){
                clearTimeout(singleClickTimer);
                numRecentClicks[file.id] = 0;
                window.open('resources/chicken.pdf');
            }
        });

        file.addEventListener( 'mouseenter', function() {
            if (!fileToggles[this.id]) {this.children[0].src = hoverCheck};
        });

        file.addEventListener( 'mouseleave', function() {
            if (!fileToggles[this.id]) {this.children[0].src = emptyCheck};
        });
    }
}
