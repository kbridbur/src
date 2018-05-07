function handleDrop(e, info){
    handleDragleave();
    if (e != null) {
        console.log(e);
        e.preventDefault();
        e.stopPropagation();
    }
    dom.default.style.display="none";
    dom.upload.style.display="block";

    if (!info) {
        if (e.dataTransfer != undefined) {
            var file = e.dataTransfer.files[0];
        } else {
            var file = e.target.files[0];
        }
        autofill(file.name, "Ben Bitdiddle", new Date(Date.now()));
    } else {
        autofill(info.name, info.author, info.date);
    }
}

function autofill(name, author, date) {
    dom.fileName.value = name;
    dom.fileAuthor.value = author;
    if (date instanceof Date) {
        var month = date.getUTCMonth() + 1;
        var day = date.getUTCDate();
        var year = date.getUTCFullYear();
        dom.fileDate.value = month + "/" + day + "/" + year;
    } else {
        dom.fileDate.value = date;
    }
}

function handleDragover(e) {
    e.preventDefault();
    dom.fileUpload.style.border = "dashed white thin";
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
