function addSortListeners() {
    var allTitles    = [dom.fileTitle, dom.dateTitle, dom.uploadTitle];
    var flipDirection = {"up":"down", "down":"up"};

    var active = dom.dateTitle;
    var afterDisplay = "down";
    addDirection(dom.dateTitle, "down");

    for (var i = 0; i < allTitles.length; i++) {
        allTitles[i].addEventListener("click", function() {
            removeDirection();
            if (active == this) {
                //filter by flipped direction
                afterDisplay = flipDirection[afterDisplay];
                addDirection(this, afterDisplay);
                filterByMe(this, afterDisplay);
            } else {
                active = this;
                //filter by default direction
                addDirection(this, "down");
                filterByMe(this, "down");
            }
        });
    }
}

function sortDates(filesHolder, direction) {
    filesHolder.sort(function(a, b){
        //update this
        bDateString = b.children[2].textContent;
        aDateString = a.children[2].textContent;

        bDateParts = bDateString.split("/");
        aDateParts = aDateString.split("/");

        

        aDate = new Date(parseInt(aDateParts[2]), parseInt(aDateParts[0]-1), parseInt(aDateParts[1]));
        bDate = new Date(parseInt(bDateParts[2]), parseInt(bDateParts[0]-1), parseInt(bDateParts[1]));

        return bDate - aDate;
       
    });
    if (direction == "down") {
        return filesHolder;
    } else {
        return filesHolder.reverse()
    }
}

function sortNames(filesHolder, direction) {
    filesHolder.sort(function(a, b){
        return a.children[1].textContent.localeCompare(b.children[1].textContent);
    });
    if (direction == "down") {
        return filesHolder;
    } else {
        return filesHolder.reverse();
    }
}

function sortUploaded(filesHolder, direction) {
    filesHolder.sort(function(a, b){
        return a.children[3].textContent.localeCompare(b.children[3].textContent);
    });
    if (direction == "down") {
        return filesHolder;
    } else {
        return filesHolder.reverse()
    }
}

function filterByMe(o, direction) {
    //from http://jsfiddle.net/jmarikle/vxju87nv/
    var resultsFiles = document.getElementById("results-files");

    var filesHolder  = Array.prototype.slice.call(resultsFiles.children); 

    if (o.id[0] == 'f') {
        filesHolder = sortNames(filesHolder, direction);
    } else if (o.id[0] == 'd') {
        filesHolder = sortDates(filesHolder, direction);
    } else {
        filesHolder = sortUploaded(filesHolder, direction);
    }

    for(var i = 0, l = filesHolder.length; i < l; i++) {
        // store the parent node so we can reatach the item
        var parent = filesHolder[i].parentNode;
        // detach it from wherever it is in the DOM
        var detatchedItem = parent.removeChild(filesHolder[i]);
        // reattach it.  This works because we are itterating
        // over the items in the same order as they were re-
        // turned from being sorted.
        parent.appendChild(detatchedItem);
    }
}

function removeDirection() {
    dom.dateTitle.classList.remove("down");
    dom.fileTitle.classList.remove("down");
    dom.uploadTitle.classList.remove("down");
    dom.dateTitle.classList.remove("up");
    dom.fileTitle.classList.remove("up");
    dom.uploadTitle.classList.remove("up");
}

function addDirection(o, direction) {
    o.classList.add(direction);
}
