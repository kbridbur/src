function deleteClassifier() {
    var toDelete = this.parentElement;
    toDelete.parentNode.removeChild(toDelete);
}

function addFormClassifierKeydownListeners() {
    for (var i = 0; i < dom.classifiersInputs.length; i++) {
        var cInput = dom.classifiersInputs[i];

        cInput.addEventListener('keydown', function(e) {
            if (e.key == "Enter") {
                cText = this.value;

                if (!cText.trim().length == 0) {
                    var newC = document.createElement("div");
                    newC.classList.add("added-form-classifier");
                    newC.innerHTML = cText;

                    var closeSpan = document.createElement("span");
                    closeSpan.classList.add("form-classifier-delete")
                    closeSpan.innerHTML = " x";
                    closeSpan.addEventListener("click", deleteClassifier);
                    newC.appendChild(closeSpan);

                    var classifier = this.id.substring(0, this.id.length - 11);
                    console.log(classifier);
                    var box = dom[classifier];

                    box.appendChild(newC);
                    this.value = "";
                    this.focus();
                }
            }
        });
    }
}
