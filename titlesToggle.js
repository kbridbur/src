
Util.events(document, {
    "DOMContentLoaded": function() {
        var fileTitle    = document.getElementById("file-title");
        var dateTitle    = document.getElementById("date-title");
        var uploadTitle  = document.getElementById("upload-title");
        var allTitles    = [fileTitle, dateTitle, uploadTitle];
        
        

       	var active = null;
       	var down = '\2228';
       	var up   = '\2227';
       	var afterDisplay = down;

        function sortDates(filesHolder, direction) {
            filesHolder.sort(function(a, b){
                //update this
                bDateString = b.children[2].textContent;
                aDateString = a.children[2].textContent;

                bDateParts = bDateString.split("/");
                aDateParts = aDateString.split("/");

                

                aDate = new Date(parseInt(aDateParts[2]), parseInt(aDateParts[0]-1), parseInt(aDateParts[1]));
                bDate = new Date(parseInt(bDateParts[2]), parseInt(bDateParts[0]-1), parseInt(bDateParts[1]));

                return bDate - aDate;
               
            });
            if (direction == down) {
                return filesHolder;
            } else {
                return filesHolder.reverse()
            }
        }

        function sortNames(filesHolder, direction) {
            filesHolder.sort(function(a, b){
                return a.children[1].textContent.localeCompare(b.children[1].textContent);
            });
            if (direction == down) {
                return filesHolder;
            } else {
                return filesHolder.reverse();
            }
        }

        function sortUploaded(filesHolder, direction) {
            filesHolder.sort(function(a, b){
                return a.children[3].textContent.localeCompare(b.children[3].textContent);
            });
            if (direction == down) {
                return filesHolder;
            } else {
                return filesHolder.reverse()
            }
        }

        function filterByMe(o, direction) {
            //from http://jsfiddle.net/jmarikle/vxju87nv/
            var resultsFiles = document.getElementById("results-files");

            var filesHolder  = Array.prototype.slice.call(resultsFiles.children); 

            if (o.id[0] == 'f') {
                filesHolder = sortNames(filesHolder, direction);
            } else if (o.id[0] == 'd') {
                filesHolder = sortDates(filesHolder, direction);
            } else {
                filesHolder = sortUploaded(filesHolder, direction);
            }

            for(var i = 0, l = filesHolder.length; i < l; i++) {
                // store the parent node so we can reatach the item
                var parent = filesHolder[i].parentNode;
                // detach it from wherever it is in the DOM
                var detatchedItem = parent.removeChild(filesHolder[i]);
                // reatach it.  This works because we are itterating
                // over the items in the same order as they were re-
                // turned from being sorted.
                parent.appendChild(detatchedItem);
            }
        }

        function flipDirection(direction) {
        	var newD;
        	if (direction == down) {
        		newD = up;
        	} else {
        		newD = down;
        	}
        	return newD;
        }

        function removeDirection() {
        	dateTitle.classList.remove("down");
	        fileTitle.classList.remove("down");
	        uploadTitle.classList.remove("down");
	        dateTitle.classList.remove("up");
	        fileTitle.classList.remove("up");
	        uploadTitle.classList.remove("up");
        }

        function addDirection(o, direction) {
        	if (direction == down) {
        		o.classList.add("down");
        	} else {
        		o.classList.add("up");
        	}
        }
		
		for (var i = 0; i < allTitles.length; i++) {
			allTitles[i].addEventListener("click", function() {
				removeDirection();
				if (active == this) {
	        		//filter by flipped direction
	        		afterDisplay = flipDirection(afterDisplay);
	        		addDirection(this, afterDisplay);
	        		filterByMe(this, afterDisplay);
	        	} else {
	        		active = this;
	        		//filter by default direction
	        		addDirection(this, down);
	        		filterByMe(this, down);
	        	}
	        });
	    }
	}
});