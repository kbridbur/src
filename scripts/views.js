
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
                swapMenus(matches, false);
                swapIconButtons(false);
                //getMainView();
                break;
            case "starred":
                matches = getStarred();
                swapMenus(matches, false);
                swapIconButtons(false);
                //getMainView();
                break;
            case "trash":
                matches = getTrash();
                //need to add change of buttons here for restoring files
                swapMenus(matches, true);
                swapIconButtons(true);
                // getTrashView();
                break;
        }

        displayMatches(parent, matches);
    });
}

function swapIconButtons(trash) {
    var normalDisplay   = trash ? "none" : "inline-block";
    var trashDisplay    = trash ? "inline-block" : "none";

    dom.starItemsButton.style.display  = normalDisplay;
    dom.trashItemsButton.style.display = normalDisplay;

    dom.restoreItemsButton.style.display = trashDisplay;
}

function swapMenus(files, trash) {
    for (var i = 0; i < files.length; i++) {
        var file                    = files[i];
        var menu                    = file.children[5];
        var editButton              = menu.children[1];
        var starButton              = menu.children[2];
        var trashButton             = menu.children[3];
        var restoreButton           = menu.children[4];

        var normalDisplay           = trash ? "none" : "block";
        var trashDisplay            = trash ? "block" : "none";

        editButton.style.display    = normalDisplay;
        starButton.style.display    = normalDisplay;
        trashButton.style.display   = normalDisplay;

        restoreButton.style.display = trashDisplay;
    }
}

// function getTrashView() {
//     trashedFiles.forEach(giveTrashMenu);
//     addMenuItemListeners();
    
//     //replace buttons here!
// }

// function giveTrashMenu(file) {
//     var menu = createTrashViewMenu();
//     file.removeChild(file.lastChild);
//     file.appendChild(menu);
// }

// function getMainView() {
//     mainFiles.forEach(giveMainMenu);
//     addMenuItemListeners();
//     //replace buttons here!
// }

// function giveMainMenu(file) {
//     var menu = createMenu();
//     file.removeChild(file.lastChild);
//     file.appendChild(menu);
// }

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
