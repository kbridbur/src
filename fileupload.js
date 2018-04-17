dom = {}

function handleDrop(e){
    e.preventDefault();
    e.stopPropagation();
    dom.default.style.display="none";
    dom.upload.style.display="block";
}

function saveFile(e){
    e.preventDefault();
    e.stopPropagation();
    dom.default.style.display="block";
    dom.upload.style.display="none";
}

Util.events(document, {
    "DOMContentLoaded": function() {
        console.log("working");
        dom.fileUpload = Util.one("#file-drag-drop");


        dom.default = Util.one("#default");
        dom.upload = Util.one("#upload");
        dom.submit = Util.one("#save-file");

        dom.fileUpload.addEventListener("dragover", function(event){event.preventDefault();}, false);
        dom.fileUpload.addEventListener("drop", function(event){handleDrop(event);}, false);
        dom.submit.addEventListener("click", function(event){saveFile(event);}, false);
    }
});
