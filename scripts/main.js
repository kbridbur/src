// shared global vars

dom = {};

tagToggles = {};
fileToggles = {};
var starredFiles = new Set();
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

        // preloadFiles.js
        loadFiles();

        // classifierColumn.js
        addAccordionListeners();

        // fileupload.js
        document.body.addEventListener("dragenter", handleDragenter);
        document.body.addEventListener("dragleave", handleDragleave);
        dom.fileUpload.addEventListener("drop", function(event){handleDrop(event);}, false);
        dom.submit.addEventListener("click", function(event){saveFile(event);}, false);
        dom.cancel.addEventListener("click", function(event){cancelFile(event);}, false);
        document.getElementById("file-drag-drop").addEventListener("click", function(){
            dom.uploadElt.click();
        });

        // titlesToggle.js
        addSortListeners();

        // fileEditMenu.js
        window.addEventListener('click', windowClick);
        setTimeout(addMenuItemListeners, 200);
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
    dom.submit              = Util.one("#save-file");
    dom.cancel              = Util.one("#cancel-file");
    dom.uploadElt           = Util.one("#hidden-file-upload");

    dom.fileTitle           = Util.one("#file-title");
    dom.dateTitle           = Util.one("#date-title");
    dom.uploadTitle         = Util.one("#upload-title");
}