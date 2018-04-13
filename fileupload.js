function handleDrop(e){
    e.preventDefault();
}

Util.events(document, {
    "DOMContentLoaded": function() {
        dom.fileUpload = Util.one("#file-drag-drop");
        dom.fileUpload.addEventListener("dragover", function(event){event.preventDefault();}, false);
        dom.fileUpload.addEventListener("drop", handleDrop(e), false);
    }
});
