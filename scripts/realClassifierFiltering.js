//TODO: separate into three different maps for each category of classifier

function addFilteringListeners() {
    var allFilters = dom.groupPanelClassifiers.concat(dom.tagPanelClassifiers.concat(dom.projectPanelClassifiers));
    var allFiles   = dom.files;
    var parent     = dom.filesContainer;
    var matches;

    for (var i = 0; i < allFilters.length; i++) {
        allFilters[i].addEventListener('click', function(e) {
            var checked = getCheckedFilters();

            if (checked.length == 0) {
                matches = allFiles;
            } else {
              console.log(checked)
                matches = filteredFiles(checked);
            }

            displayMatches(parent, matches);
        });
    }
}


// Precondition: only one of deleteOne or deleteAll may be true
// Use this to update the map of filters to files
// deleteOne: set to true if you want to delete the entry file from a filter
// deleteAll: set to true if you want to delete the file from the map entirely
// filter:    a string for the tag group or project
// entry:     a result-file class html element
function updateFilterMap (filter, entry, deleteOne=false, deleteAll=false) {
    if (deleteAll) {
        deleteFromMap(entry);
    } else if (deleteOne) {
        classifierToFiles[filter].remove(entry);
    }
    else if (filter in classifierToFiles) {
        classifierToFiles[filter].add(entry);
    } else {
        classifierToFiles[filter] = new Set([entry]);
    }
}

// deletes an entry from every set in the map
function deleteFromMap (entry) {
    for (var f in classifierToFiles) {
        if (entry in classifierToFiles[f]) {
            classifierToFiles[f].removeChild(entry);
        }
    }
}

// returns an array of all the filters that are checked
function getCheckedFilters() {
    // 
    // for (var i = 0; i < tagToggles.length; i++){
    //   var item = tagToggles[i]
    //   if (item == true){
    //
    //   }
    // }
    var ids = Object.values(tagToggles).filter(item => item == true);
    console.log(Object.values(tagToggles))
    var c = [];
    for (var i = 0; i < ids.length; i++) {
        c.push(Util.one("#" + ids[i]));
    }
    console.log(c)
    return c;
}

// given a list of filters, returns array of all files constrained by those filters
function filteredFiles(filters) {
    //TODO: update this I got all matches instead of all files with at least these filters
    var matches = new Set()
    for (var i = 0; i < filters.length; i++) {
      console.log(classifierToFiles)
      console.log(filters)
        matches.forEach(classifierToFiles[filters[i]].add, classifierToFiles[filters[i]]);
    }
    return Array.from(matches);
}
