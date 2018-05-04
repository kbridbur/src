
function addClassifierSearchListeners() {
    for (var i = 0; i < dom.classifierSearchers.length; i++) {
        var cInput = dom.classifierSearchers[i];

        cInput.addEventListener('keyup', function(e) {
            var filtered = [];
            var searcherIdentifier = this.id[0];
            var desiredClassifiers;
            var cText = this.value;
            var parent;

            if (searcherIdentifier == "t") {
                desiredClassifiers = dom.tagPanelClassifiers;
                parent = dom.tagPanel;
            } else if (searcherIdentifier == "p") {
                desiredClassifiers = dom.projectPanelClassifiers;
                parent = dom.projectPanel;
            } else {
                desiredClassifiers = dom.groupPanelClassifiers;
                parent = dom.groupPanel;
            }

            if (cText.trim().length > 0) { 
                filtered = getMatchingClassifiers(desiredClassifiers, cText);
            } else {
                filtered = desiredClassifiers;
            }
            addClassifiersToParent(parent, filtered);
        });
    }
}

function getMatchingClassifiers(classifiers, text) {
    //from https://stackoverflow.com/questions/2852199/select-objects-in-array-based-on-regex-match
    var f = (function(classifiers, pattern){
        var filtered = [], i = classifiers.length, re = new RegExp(pattern.toLowerCase() + '+');
        while (i--) {
            if (re.test(classifiers[i].innerText.trim().toLowerCase())) {
                filtered.push(classifiers[i]);
            }
        }
        return filtered;
    })(classifiers, text); // text is the pattern
    f.join();
    f = sortAlphabetic(f);
    return f
}

function sortAlphabetic(classifiers) {
    classifiers.sort(function(a, b){
        return a.innerText.localeCompare(b.innerText);
    });
    return classifiers;
}

function addClassifiersToParent(parent, classifiers) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    for(var i = 0; i < classifiers.length; i++) {
        parent.appendChild(classifiers[i]);
    }
    var tagsInField = parent.children.length;
    var margin = 5;
    var sizeOfPanel = tagsInField * (parent.children[0].clientHeight) + (tagsInField + 1) * margin;
    parent.style.height = sizeOfPanel+"px";
}