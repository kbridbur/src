function handleDrop(e, info){
    handleDragleave();
    if (e != null) {
        console.log(e);
        e.preventDefault();
        e.stopPropagation();
    }

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
    var checkbox = document.createElement("img")
    checkbox.setAttribute("src", "images/checkbox.png")
    checkbox.setAttribute("class", "result-file-checkbox")

    var filename = document.createElement("span")
    filename.setAttribute("class", "result-filename")
    filename.innerHTML = "BankingInATechWorld.pdf"
    // filename.prepend(checkbox)

    var date = document.createElement("span")
    date.setAttribute("class", "result-date-uploaded")
    date.innerHTML = "05/09/2018"

    var uploader = document.createElement("span")
    uploader.setAttribute("class", "result-uploaded-by")
    uploader.innerHTML = "Ben Bitdiddle (Me)"

    var dots = document.createElement("i");
    dots.className = "fas fa-ellipsis-v file-dots";

    var menu = createMenu();

    var child = document.createElement("div")
    child.setAttribute("id", "sample-result-add")
    child.setAttribute("class", "result-file")

    child.appendChild(checkbox)
    child.appendChild(filename)
    child.appendChild(date)
    child.appendChild(uploader)
    child.appendChild(dots)
    child.appendChild(menu)

    dots.addEventListener('click', openFileMenu)

    var parent = document.getElementById("results-files");
    // parent.add(child);

    parent.prepend(child);

    $('#upload-modal').modal('hide');


    //
    //
    // var child = document.createElement("div")
    // child.setAttribute("id", "sample-result-4")
    // child.setAttribute("class", "result-file")
    //
    // child.appendChild(filename)
    // child.appendChild(date)
    // child.appendChild(uploader)
    //
    // var parent = document.getElementById("results-files");
    // parent.prepend(child)
    //
    //
    //
    //
    //
    //
    //
    // var randomIndex = Math.floor(Math.random() * 5)
    //
    // var checkbox = document.createElement("img")
    // checkbox.setAttribute("src", "images/checkbox.png")
    // checkbox.setAttribute("class", "result-file-checkbox")
    //
    // var filename = document.createElement("span")
    // filename.setAttribute("class", "result-filename")
    // filename.innerHTML = titles[i]
    //
    // var date = document.createElement("span")
    // date.setAttribute("class", "result-date-uploaded")
    // date.innerHTML = dates[i]
    //
    // var uploader = document.createElement("span")
    // uploader.setAttribute("class", "result-uploaded-by")
    // uploader.innerHTML = contributors[randomIndex]
    //
    // var dots = document.createElement("i");
    // dots.className = "fas fa-ellipsis-v file-dots";
    //
    // var menu = createMenu();
    //
    // var child = document.createElement("div")
    // child.setAttribute("id", "sample-result-"+i)
    // child.setAttribute("class", "result-file")
    //
    // child.appendChild(checkbox)
    // child.appendChild(filename)
    // child.appendChild(date)
    // child.appendChild(uploader)
    // child.appendChild(dots)
    // child.appendChild(menu)
    //
    // dots.addEventListener('click', openFileMenu)
    //
    // var parent = document.getElementById("results-files");
    // mainFiles.add(child);
    //
    // parent.appendChild(child);

}
