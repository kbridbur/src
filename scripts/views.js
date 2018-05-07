
function addViewsListener() {
    var views  = dom.views;
    var parent = dom.filesContainer; 

    views.addEventListener('change', function(e) {
        var val = e.target.value;
        var matches;

        switch (val) {
            case "main":
                matches = getMain();
                break;
            case "starred":
                matches = getStarred();
                break;
            case "trash":
                matches = getTrash();
                break;
        }

        displayMatches(parent, matches);
    });
}

function getTrash() {
    return Array.from(trashedFiles);
}

function getStarred() {
    return Array.from(starredFiles);
}

function getMain() {
    return Array.from(mainFiles);
}

function displayMatches(parent, matches) {
    //need to re sort matches here by active title filter
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    for (var i = 0; i < matches.length; i++) {
        parent.appendChild(matches[i]);
    }
}