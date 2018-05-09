
function addViewsListener() {
    var views  = dom.views;
    var parent = dom.filesContainer;
    //TODO: fix view getters so menu items function and top buttons change 
    views.addEventListener('change', function(e) {
        var val = e.target.value;
        var matches;

        switch (val) {
            case "main":
                matches = getMain();
                //getMainView();
                break;
            case "starred":
                matches = getStarred();
                //getMainView();
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
    trashedFiles.forEach(giveTrashMenu);
    addMenuItemListeners();
    
    //replace buttons here!
}

function giveTrashMenu(file) {
    var menu = createTrashViewMenu();
    file.removeChild(file.lastChild);
    file.appendChild(menu);
}

function getMainView() {
    mainFiles.forEach(giveMainMenu);
    addMenuItemListeners();
    //replace buttons here!
}

function giveMainMenu(file) {
    var menu = createMenu();
    file.removeChild(file.lastChild);
    file.appendChild(menu);
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
