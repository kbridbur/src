// shared global vars

dom = {};

tagToggles = {};
fileToggles = {};

classifierToFiles = {};

var selectedFiles = new Set();
var starredFiles  = new Set();
var trashedFiles  = new Set();
var mainFiles     = new Set()

fileRecentClick = {};
numRecentClicks = {};
var toggler = true;

Util.events(document, {
    "DOMContentLoaded": function() {

        populateDom();

        //------attach all handlers-------//

        // selecting.js
        dom.selectAll.addEventListener( 'mouseenter', function() {
            if (toggler) {this.src = hoverCheck};
        });

        dom.selectAll.addEventListener( 'mouseleave', function() {
            if (toggler) {this.src = emptyCheck};
        });
        dom.selectAll.addEventListener( 'click', selectAllHandler);
        addClassifierListeners();
        setTimeout(fileSelect, 200);

        // addClassifiers.js
        addFormClassifierKeydownListeners();
        addNewFileFormSubmitListener();

        // preloadFiles.js
        loadFiles();
        dom.files               = Util.all(".result-file");
        for (var i=0; i<dom.optionBoxes.children.length; i++){
            dom.optionBoxes.children[i].disabled = true;
        }
        fillFilteringMap();

        // classifierColumn.js
        addAccordionListeners();

        // fileupload.js
        document.body.addEventListener("dragover", handleDragover, false);
        document.body.addEventListener("dragleave", handleDragleave, false);
        dom.fileUpload.addEventListener("drop", handleDrop, false);
        dom.submit.addEventListener("click", function(event){saveFile(event);}, false);
        dom.uploadButton.addEventListener("click", function(){
            dom.uploadElt.click();
        });

        // titlesToggle.js
        addSortListeners();

        // fileEditMenu.js
        window.addEventListener('click', windowClick);
        setTimeout(addMenuItemListeners, 200);
        Util.one("#dropdown").style.borderRadius = "8px";
        dom.starItemsButton.addEventListener('click', starItemsHandler);
        dom.trashItemsButton.addEventListener('click', trashItemsHandler);

        // classifierSearch.js
        addClassifierSearchListeners();

        //search.js
        addSearchListeners();

        //views.js
        addViewsListener();

        //realClassifierFiltering.js
        addFilteringListeners();

    }
});

function populateDom() {
    dom.selectAll           = Util.one("#selectAll");
    dom.classifiers         = Util.all(".classifier");

    dom.tags                = Util.one("#tags-form-box");
    dom.projects            = Util.one("#projects-form-box");
    dom.groups              = Util.one("#groups-form-box");
    dom.classifiersInputs   = Util.all(".form-classifier-input");

    dom.tabs                = document.getElementsByClassName("views-btn");

    dom.fileUpload          = Util.one("#file-drag-drop");
    dom.fileName            = Util.one("#file-name");
    dom.fileAuthor          = Util.one("#file-author");
    dom.fileDate            = Util.one("#publish-date");

    dom.default             = Util.one("#default");
    dom.upload              = Util.one("#upload");
    dom.uploadButton        = Util.one("#upload-button");
    dom.submit              = Util.one("#save-file");
    dom.uploadElt           = Util.one("#hidden-file-upload");

    dom.starItemsButton     = Util.one("#star-items");
    dom.trashItemsButton    = Util.one("#trash-items");

    dom.fileTitle           = Util.one("#file-title");
    dom.dateTitle           = Util.one("#date-title");
    dom.uploadTitle         = Util.one("#upload-title");

    dom.tagPanel            = Util.one("#tags-panel");
    dom.projectPanel        = Util.one("#projects-panel");
    dom.groupPanel          = Util.one("#groups-panel");
    dom.classifierSearchers = Util.all(".classifier-search");

    dom.tagPanelClassifiers     = Array.prototype.slice.call(dom.tagPanel.children);
    dom.projectPanelClassifiers = Array.prototype.slice.call(dom.projectPanel.children);
    dom.groupPanelClassifiers   = Array.prototype.slice.call(dom.groupPanel.children);

    dom.optionBoxes         = Util.one("#control-icons");

    dom.search              = Util.one("#main-search");
    dom.filesContainer      = Util.one("#results-files");
    dom.files               = Array.prototype.slice.call(dom.filesContainer.children);

    dom.views               = Util.one("#dropdown");

    dom.upper               = Util.one("#header");
    dom.lower               = Util.one("#lower");
}
