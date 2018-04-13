dom = {}

var dragItem = null;
var dragItemOriginX = 0;
var dragItemOriginY = 0;
var dragItemOriginZ = 0;

function pickItemUp(e){
    var clicked = e.srcElement;
    if (clicked.classList.contains("file") || clicked.classList.contains("tag")){
        dragItem = clicked;
    }
    dragItemOriginX = e.screenX;
    dragItemOriginY = e.screenY;
    dragItemOriginZ = clicked.style.zIndex;
    dragItem.style.zIndex = 2;
    dragItem.style.pointerEvents = "none";
}

function moveItem(e){
    if (!dragItem){
        return;
    }
    dragItem.style.left = e.screenX - dragItemOriginX + "px";
    dragItem.style.top = e.screenY - dragItemOriginY + "px";
}

function setItemDown(e){
    if (!dragItem){
        return;
    }
    //Adding to catergories logic
    dragItem.style.left = 0;
    dragItem.style.top = 0;
    dragItem.style.pointerEvents = "auto";
    dragItem.style.zIndex = dragItemOriginZ;
    dragItem = null;
    dragItemOriginX = 0;
    dragItemOriginY = 0;
    dragItemOriginZ = 0;
}

Util.events(document, {
    "DOMContentLoaded": function() {
        document.addEventListener("mousedown", function(event) {pickItemUp(event);});
        document.addEventListener("mousemove", function(event) {moveItem(event);});
        document.addEventListener("mouseup", function(event) {setItemDown(event);});
    }
});
