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
        closeMenu();
    }
}

function closeMenu() {
    if (openMenu != null) {
        openMenu.style.display = "none";
    }
}

Util.events(document, {
    "DOMContentLoaded": function() {
        window.addEventListener('click', windowClick)
    }
});