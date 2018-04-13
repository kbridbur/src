dom = {}

function handleDrop(e){
    e.preventDefault();
    console.log("hi");
}

Util.events(document, {
    "DOMContentLoaded": function() {
        console.log("working");
        dom.fileUpload = Util.one("#file-drag-drop");
        dom.fileUpload.addEventListener("dragover", function(event){event.preventDefault();}, false);
        dom.fileUpload.addEventListener("drop", function(event){handleDrop(event);}, false);
    }
});
