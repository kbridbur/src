
function addSearchListeners() {
    var cInput = dom.search;

    cInput.addEventListener('keyup', function(e) {
        var filtered = [];
        var cText = this.value;
        var parent;
        var desiredFiles;


        parent = Util.one("#results-files");
        desiredFiles = dom.files;

        if (cText.trim().length > 0) {
            filtered = getMatchingFiles(desiredFiles, cText);
        } else {
            filtered = desiredFiles;
        }
        addFilesToParent(parent, filtered);
    });
}

function getMatchingFiles(files, text) {
    //from https://stackoverflow.com/questions/2852199/select-objects-in-array-based-on-regex-match
    var f = (function(files, pattern){
        var filtered = [], i = files.length, re = new RegExp(pattern.toLowerCase() + '+');
        while (i--) {
            if ( (re.test(files[i].children[1].innerText.trim().toLowerCase())) || (re.test(files[i].children[3].innerText.trim().toLowerCase())) )  {
                filtered.push(files[i]);
            }
        }
        return filtered;
    })(files, text);
    f.join();
    return f.reverse();
}


function addFilesToParent(parent, files) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    for(var i = 0; i < files.length; i++) {
        parent.appendChild(files[i]);
    }
    filterByActiveTitle(activeTitle);
}
