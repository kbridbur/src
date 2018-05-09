function deleteClassifier() {
    var toDelete = this.parentElement;
    toDelete.parentNode.removeChild(toDelete);
}

function addFormClassifierKeydownListeners() {
    for (var i = 0; i < dom.classifiersInputs.length; i++) {
        var cInput = dom.classifiersInputs[i];

        cInput.addEventListener('keydown', function(e) {
            if (e.key == "Enter") {
                cText = this.value;

                if (!cText.trim().length == 0) {
                    var newC = document.createElement("div");
                    newC.classList.add("added-form-classifier");
                    newC.innerHTML = cText;

                    var closeSpan = document.createElement("span");
                    closeSpan.classList.add("form-classifier-delete")
                    closeSpan.innerHTML = " x";
                    closeSpan.addEventListener("click", deleteClassifier);
                    newC.appendChild(closeSpan);

                    var classifier = this.id.substring(0, this.id.length - 11);
                    console.log(classifier);
                    var box = dom[classifier];

                    box.appendChild(newC);
                    this.value = "";
                    this.focus();
                }
            }
        });
    }
}

function extractFormboxText(box) {
    var n = [];
    for (var i = 0; i < box.children.length; i ++) {
        n.push(box.children[i].innerText);
    }
    return n
}

function getFileEltFromName(fname) {
    var fs = Util.all(".result-filename");
    var match;
    for (var i = 0; i < fs.length; i++) {
        if (fs[i].innerText == fname) {
            match = fs[i].parentNode;
        }
    }
    return match;
}

function addNewFileFormSubmitListener() {
    var btn = Util.one("#save-file");

    btn.addEventListener('click', function(e) {
        var allFilters = [];
        allFilters.concat(extractFormboxText(dom.tags));
        allFilters.concat(extractFormboxText(dom.projects));
        allFilters.concat(extractFormboxText(dom.groups));

        var filename = Util.one("#file-name").value;

        //TODO: fugure out how to get this shit
        var elt      = getFileEltFromName(filename);

        for (var i = 0; i < allFilters.length; i++) {
            updateFilterMap(allFilters[i], elt);
        }

    });
}
