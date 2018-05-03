// dom = {}

// Util.events(document, {
//     "DOMContentLoaded": function() {
//         dom.optionBoxes = Util.one("#control-icons");
//         dom.filecol = Util.one("#results-files");
//         dom.filecol.addEventListener("click", function(event) {
//             if (!event.srcElement.parentElement.classList.contains("result-file")){
//                 return;
//             }
//             var checkbox = event.srcElement.getElementsByTagName('input')[0];
//             checkbox.checked = !checkbox.checked;

//             var allBoxes = Util.all(".result-file-checkbox");
//             for (var i = 0; i < allBoxes.length; i++){
//                 console.log(allBoxes[i].checked);
//                 if (allBoxes[i].checked){
//                     dom.optionBoxes.style.display = "block";
//                     return;
//                 }
//             }
//             dom.optionBoxes.style.display = "none";
//         });


//     }
// });
