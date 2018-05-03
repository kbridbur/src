dom = {}

function handleDrop(e){
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    dom.default.style.display="none";
    dom.upload.style.display="block";
}

function handleDragenter(e) {
    dom.fileUpload.style.border = "dashed 5px #B4E58B";
}

function handleDragleave(e) {
    dom.fileUpload.style.border = "none";
}

function saveFile(e){
    e.preventDefault();
    e.stopPropagation();
    dom.default.style.display="block";
    dom.upload.style.display="none";

    var checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("class", "result-file-checkbox")

    var filename = document.createElement("span")
    filename.setAttribute("class", "result-filename")
    filename.innerHTML = "BankingInATechWorld.pdf"
    filename.prepend(checkbox)

    var date = document.createElement("span")
    date.setAttribute("class", "result-date-uploaded")
    date.innerHTML = "04/20/18"



    var uploader = document.createElement("span")
    uploader.setAttribute("class", "result-uploaded-by")
    uploader.innerHTML = "Me"

    var child = document.createElement("div")
    child.setAttribute("id", "sample-result-4")
    child.setAttribute("class", "result-file")

    child.appendChild(filename)
    child.appendChild(date)
    child.appendChild(uploader)

    var parent = document.getElementById("results-files");
    parent.prepend(child)

}

function cancelFile(e){
    e.preventDefault();
    e.stopPropagation();
    dom.default.style.display="block";
    dom.upload.style.display="none";
}

Util.events(document, {
    "DOMContentLoaded": function() {
        dom.fileUpload = Util.one("#file-drag-drop");


        dom.default = Util.one("#default");
        dom.upload = Util.one("#upload");
        dom.submit = Util.one("#save-file");
        dom.cancel = Util.one("#cancel-file");

        document.body.addEventListener("dragenter", handleDragenter);
        document.body.addEventListener("dragleave", handleDragleave);
        dom.fileUpload.addEventListener("drop", function(event){handleDrop(event);}, false);
        dom.submit.addEventListener("click", function(event){saveFile(event);}, false);
        dom.cancel.addEventListener("click", function(event){cancelFile(event);}, false);

        document.getElementById("file-drag-drop").addEventListener("click", function(){
            var uploadElt = document.getElementById('hidden-file-upload');
            uploadElt.click();
        });
    }
});
