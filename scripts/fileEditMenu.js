var openMenu = null;

function openFileMenu(e) {
    e.stopPropagation();
    var menu = this.parentNode.children[5];
    if (!(menu == openMenu)) {
        closeMenu();
        menu.style.display = "block";
        openMenu = menu;
    } else {
        closeMenu();
        openMenu = null;
    }
}

function windowClick(e) {
    if (e.target.className != "fas fa-ellipsis-v file-dots") {
        // setTimeout(function(){closeMenu();}, 100);
        closeMenu();
    }
}

function closeMenu() {
    if (openMenu != null) {
        openMenu.style.display = "none";
        openMenu = null;
    }
}

function menuItemClickHandler(e) {
    var buttonType = this.getAttribute("button-type");
    var file = this.parentNode.parentNode;
    var fileName = file.children[1].innerText;
    var fileDate = file.children[2].innerText;
    var fileUploader = file.children[3].innerText;

    console.log(fileName + " uploaded on " + fileDate + " by "+fileUploader);

    switch (buttonType) {
        case "edit":
            var info = {name: fileName, author: fileUploader, date: fileDate};
            handleDrop(null, info);
            break;
        case "star":
            if (!starredFiles.has(file)) {
                var star = document.createElement("img");
                star.src = "images/yellow-star.png";
                star.className = "file-star";
                file.children[1].appendChild(star);
                starredFiles.add(file);
                this.innerText = "Unstar";
            } else {
                starredFiles.delete(file);
                file.children[1].removeChild(file.children[1].childNodes[1]);
                this.innerText = "Star";
            }
            break;
        case "trash":
            var fileParent = file.parentNode;
            fileParent.removeChild(file);
            break;
    }
    e.stopPropagation();
}

function addMenuItemListeners() {
    dom.menuButtons = Util.all(".file-menu-item");
    for (var i = 0; i < dom.menuButtons.length; i++) {
        var b = dom.menuButtons[i];
        b.addEventListener("click", menuItemClickHandler);
    }
}