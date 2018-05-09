
function addViewsListener() {
    var views  = dom.views;
    var parent = dom.filesContainer; 

    views.addEventListener('change', function(e) {
        var val = e.target.value;
        var matches;

        switch (val) {
            case "main":
                matches = getMain();
                getMainView();
                break;
            case "starred":
                matches = getStarred();
                getMainView();
                break;
            case "trash":
                matches = getTrash();
                //need to add change of buttons here for restoring files
                getTrashView();
                break;
        }

        displayMatches(parent, matches);
    });
}

function getTrashView() {

}

function getMainView() {

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
    filterByActiveTitle(activeTitle);
}