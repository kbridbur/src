dom = {}

function handleDrop(e){
    e.preventDefault();
    e.stopPropagation();
    dom.default.style.display="none";
    dom.upload.style.display="block";
}

Util.events(document, {
    "DOMContentLoaded": function() {
        console.log("working");
        dom.fileUpload = Util.one("#file-drag-drop");
        dom.fileUpload.addEventListener("dragover", function(event){event.preventDefault();}, false);
        dom.fileUpload.addEventListener("drop", function(event){handleDrop(event);}, false);

        dom.default = Util.one("#default");
        dom.upload = Util.one("#upload");
    }
});
