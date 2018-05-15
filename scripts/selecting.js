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
        console.log("disabled checks");
    }
}

function openFile() {
    window.open('resources/chicken.pdf');
}

function checkForChecks() {
    var openButton = document.getElementById("preview-open-file");
    var img = document.getElementById("preview-image");
    var filename = document.getElementById("preview-filename");
    var uploader = document.getElementById("preview-author");
    var date = document.getElementById("preview-date");
    var description = document.getElementById("preview-description");
    var imgPlacehold = document.getElementById("img-placeholder");
    var mainCol = document.getElementById("main-col");
    var prevCol = document.getElementById("preview-col");

    if (Object.values(fileToggles).filter(item => item == true).length > 1) {
        // dom.lower.style.gridTemplateColumns = "18vw 60vw 22vw";
        img.src = "";
        description.innerHTML = "Multiple files selected";
        imgPlacehold.innerHTML = "";
        filename.innerHTML = "";
        uploader.innerHTML = "";
        date.innerHTML = "";
        openButton.style.display = "none";
        mainCol.style.width = "60vw";
        prevCol.style.backgroundColor = "#585858";
        // var lower = Util.one("#lower");
        // lower.style.gridTemplateColumns = "18vw 60vw 22vw";
    } else if (Object.values(fileToggles).indexOf(true) > -1) {
        // dom.lower.style.gridTemplateColumns = "18vw 60vw 22vw";
        var it = selectedFiles.values();
        var file = it.next().value;
        var extension = file.children[1].innerHTML.substring(file.children[1].innerHTML.length - 3);
        description.innerHTML = "File description goes here. Can include notes about the file or anything you want tbh.";
        filename.innerHTML = file.children[1].innerHTML;
        uploader.innerHTML = "Uploaded by " + file.children[3].innerHTML;
        date.innerHTML = " on "+file.children[2].innerHTML;
        openButton.style.display = "block";
        imgPlacehold.innerHTML = "";
        mainCol.style.width = "60vw";
        prevCol.style.backgroundColor = "#585858";
            switch (extension) {
                case "doc":
                case "pdf":
                    img.src = "images/pdf.png";
                    break;
                case "ppt":
                    img.src = "images/ppt.png";
                    break;
                case "png":
                case "jpg":
                    img.src = "images/jpg.png";
                    break;
                case "mp3":
                    img.src = "images/mp3.png";
                    break;
                default:
                    img.src = "images/pdf.png";

            }

        // var lower = Util.one("#lower");
        // lower.style.gridTemplateColumns = "18vw 60vw 22vw";
    } else {
        // dom.lower.style.gridTemplateColumns = "18vw 82vw";
        mainCol.style.width = "82vw";
        setTimeout(function() {
            prevCol.style.backgroundColor = "white";
            img.src = "";
            description.innerHTML = "";
            filename.innerHTML = "";
            uploader.innerHTML = "";
            date.innerHTML = "";
        } , 300)
        // var lower = Util.one("#lower");
        // lower.style.gridTemplateColumns = "18vw 82vw";
    }
}

function selectAllHandler() {
    var allFiles = Util.all(".result-file");
    var btn = Util.one("#selectAll");
    for (var i = 0; i < allFiles.length; i++) {
        if (toggler) {
            allFiles[i].children[0].src = filledCheck;
            fileToggles[allFiles[i].id] = true;
            selectedFiles.add(allFiles[i]);

        } else {
            allFiles[i].children[0].src = emptyCheck;
            fileToggles[allFiles[i].id] = false;
            selectedFiles.delete(allFiles[i]);

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
    checkForChecks();
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

            if (this.id == "bitcoin" || this.id == "finance"){
              checkSpecial = true
            }
            else {
              checkSpecial = false
            }
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
    for (var i = 0; i < dom.files.length; i++) {
        file = dom.files[i];
        fileToggles[file.id] = false;
        fileRecentClick[file.id] = false;
        numRecentClicks[file.id] = 0;
        file.addEventListener( 'click', function() {
            // console.log(openMenu);
            if (!(openMenu == null)) {
                console.log("ther is menu open");
                return;
            }
            var a = this;
            numRecentClicks[file.id]++;
            // console.log(numRecentClicks[file.id]);
            if (numRecentClicks[file.id] == 1){
                singleClickTimer = setTimeout(function(){
                    numRecentClicks[file.id] = 0;

                    toggleCheck(a);

                    var check = Object.keys(fileToggles).filter(i => fileToggles[i] == false);
                    if (check.length > 0){
                        dom.selectAll.src = emptyCheck;
                    }
                    else {
                        dom.selectAll.src = filledCheck;
                    }
                    checkForChecks();
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

function toggleCheck(obj) {
    var checkbox = obj.children[0];
    toggle = !fileToggles[obj.id];
    checkbox.src = toggle ? filledCheck : emptyCheck;
    fileToggles[obj.id] = toggle;
    // console.log("true");
    if (toggle) {
        selectedFiles.add(obj);
    } else {
        selectedFiles.delete(obj);
    }
}
