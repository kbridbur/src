var checkNum = 0;
var checkName = '';
var checkSpecial = false;

var titles = [
  "AdoptionOfBlockChain.jpg",
  "BitcoinAndBanking.pdf",
  "BitcoinBasics.doc",
  "CurrencyOnline.jpeg",
  "BitcoinTrendsGraph.png",
  "ManagementInTech.pdf",
  "DamageFromPollutants.docx",
  "TheDeclineOfBees.mp3",
  "BeesAndTheHoneyIndustry.mov",
  "BeeAnatomyDiagram.jpg",
  "LifecyleOfTheBee.pdf",
  "Lecture15.ppt",
  "Lecture17.ppt",
  "Lecture18.ppt",
  "CourseSyllabus.doc",
  "MartelDesignPaper.pdf",
  "SadOak.jpg",
  "WaterfallGhana.jpg",
  "RomanRuins.jpg",
  "SunsetOcean.jpg",
  "GeeseWater.jpg",
  "BlockChainAndBitcoin"
]

var classifiersToTitles = {
  "blockchain" : ["AdoptionOfBlockChain.jpg", "BlockChainAndBitcoin"],
  "bitcoin"    : ["BitcoinTrendsGraph.png","BitcoinAndBanking.pdf", "BitcoinBasics.doc", "BlockChainAndBitcoin"],
  "finance"    : ["CurrencyOnline.jpeg","ManagementInTech.pdf"],
  "bees"       : ["TheDeclineOfBees.mp3", "DamageFromPollutants.docx", "BeesAndTheHoneyIndustry.mov", "BeeAnatomyDiagram.jpg", "LifecyleOfTheBee.pdf"],
  "photography": ["SadOak.jpg", "GeeseWater.jpg", "WaterfallGhana.jpg", "RomanRuins.jpg","SunsetOcean.jpg"],
  "Photography": ["WaterfallGhana.jpg", "RomanRuins.jpg"],
  "6.813 Materials": ["Lecture15.ppt", "Lecture17.ppt", "Lecture18.ppt","CourseSyllabus.doc"],
  "Fintech Project": ["BitcoinTrendsGraph.png", "AdoptionOfBlockChain.jpg", "ManagementInTech.pdf"],
  "Bees and Tech"  : ["DamageFromPollutants.docx"],
  "Karger Lab"     : ["MartelDesignPaper.pdf"],
  "6.813 Staff"    : ["CourseSyllabus.doc"],
  "Photogaphy Club": ["SunsetOcean.jpg"]
}

var blockchainTitles = [
  "AdoptionOfBlockChain.jpg",
  "CurrencyOnline.jpeg",
  "BlockChainAndBitcoin"
]

var bitcoinTitles = [
  "BitcoinAndBanking.pdf",
  "BitcoinBasics.doc",
  "CurrencyOnline.jpeg",
  "BitcoinTrendsGraph.png",
  "BlockChainAndBitcoin"
]
var financeTitles = [
  "BitcoinAndBanking.pdf",
  "CurrencyOnline.jpeg",
  "BitcoinTrendsGraph.png",
  "ManagementInTech.pdf"
]
var financeBitcoinTitles = [
  "BitcoinAndBanking.pdf",
  "CurrencyOnline.jpeg",
  "BitcoinTrendsGraph.png"
]
var beesTitles = [
  "DamageFromPollutants.docx",
  "TheDeclineOfBees.mp3",
  "BeesAndTheHoneyIndustry.mov",
  "BeeAnatomyDiagram.jpg"
]
var photographyTitles = [
  "SadOak.jpg",
  "WaterfallGhana.jpg",
  "RomanRuins.jpg",
  "SunsetOcean.jpg",
  "GeeseWater.jpg"
]

var lectureTitles = [
  "Lecture15.ppt",
  "Lecture17.ppt",
  "Lecture18.ppt",
  "CourseSyllabus.doc",
  "MartelDesignPaper.pdf"
]

var fintechTitles = [
  "AdoptionOfBlockChain.jpg",
  "BitcoinAndBanking.pdf",
  "BitcoinBasics.doc",
  "CurrencyOnline.jpeg",
  "BitcoinTrendsGraph.png",
  "ManagementInTech.pdf",
  "BlockChainAndBitcoin"
]

var kargerTitles = [
  "AdoptionOfBlockChain.jpg",
  "BitcoinAndBanking.pdf",
  "BitcoinBasics.doc",
  "CurrencyOnline.jpeg",
  "BitcoinTrendsGraph.png",
  "ManagementInTech.pdf",
  "BlockChainAndBitcoin",
  "DamageFromPollutants.docx",
  "TheDeclineOfBees.mp3",
  "BeesAndTheHoneyIndustry.mov",
  "BeeAnatomyDiagram.jpg"
]

var contributors = [
  "Sara Tollestrup",
  "Kyle Bridburg",
  "Santiago Munoz",
  "Rebecca Weinberger",
  "Ben Bitdiddle (Me)"
]

var dates = [
  "04/19/2018",
  "03/30/2018",
  "02/20/2018",
  "02/06/2018",
  "01/08/2018",
  "07/09/2017",
  "05/10/2017",
  "04/13/2017",
  "03/29/2017",
  "02/30/2017",
  "01/23/2017",
  "05/09/2016",
  "04/05/2016",
  "03/03/2016",
  "02/08/2016",
  "01/01/2015",
  "01/15/2015",
  "01/10/2015",
  "01/09/2015",
  "01/04/2015",
  "12/30/2014",
  "12/25/2014"
]

var titleDict = {
  "blockchain": blockchainTitles,
  "bitcoin": bitcoinTitles,
  "finance": financeTitles,
  "bees": beesTitles,
  "photography": photographyTitles,
  "lecture": lectureTitles,
  "fintech": fintechTitles,
  "karger": kargerTitles
}

function createTrashButton() {
  var trashButton = document.createElement("button");
  trashButton.innerHTML = "Trash";
  trashButton.classList.add("file-menu-item");
  trashButton.setAttribute("button-type", "trash");
  return trashButton;
}

function createStarButton() {
  var starButton = document.createElement("button");
  starButton.innerHTML = "Star";
  starButton.classList.add("file-menu-item");
  starButton.setAttribute("button-type", "star");
  return starButton;
}

function createEditButton() {
  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.classList.add("file-menu-item");
  editButton.setAttribute("button-type", "edit");
  return editButton;
}

function createRestoreButton() {
  var restoreButton = document.createElement("button");
  restoreButton.innerHTML = "Restore";
  restoreButton.classList.add("file-menu-item");
  restoreButton.setAttribute("button-type", "restore");
  return restoreButton;
}

function createMenu() {
    var menu = document.createElement("div");
    menu.className = "file-menu";

    var editButton  = createEditButton();
    var starButton  = createStarButton();
    var trashButton = createTrashButton();

    var arrow = document.createElement("div");
    arrow.classList.add("file-menu-arrow");

    menu.appendChild(arrow);
    menu.appendChild(editButton);
    menu.appendChild(starButton);
    menu.appendChild(trashButton);
    return menu;
}

function createTrashViewMenu() {
  var menu = document.createElement("div");
  menu.className = "file-menu";

  var restoreButton = createRestoreButton();
  var arrow = document.createElement("div");
  arrow.classList.add("file-menu-arrow");
  menu.appendChild(arrow);
  menu.appendChild(restoreButton);
  return menu;
}

function loadFiles () {
  for (var i = 0; i < dates.length; i++){

    var randomIndex = Math.floor(Math.random() * 5)

    var checkbox = document.createElement("img")
    checkbox.setAttribute("src", "images/checkbox.png")
    checkbox.setAttribute("class", "result-file-checkbox")

    var filename = document.createElement("span")
    filename.setAttribute("class", "result-filename")
    filename.innerHTML = titles[i]

    var date = document.createElement("span")
    date.setAttribute("class", "result-date-uploaded")
    date.innerHTML = dates[i]

    var uploader = document.createElement("span")
    uploader.setAttribute("class", "result-uploaded-by")
    uploader.innerHTML = contributors[randomIndex]

    var dots = document.createElement("i");
    dots.className = "fas fa-ellipsis-v file-dots";

    var menu = createMenu();

    var child = document.createElement("div")
    child.setAttribute("id", "sample-result-"+i)
    child.setAttribute("class", "result-file")

    child.appendChild(checkbox)
    child.appendChild(filename)
    child.appendChild(date)
    child.appendChild(uploader)
    child.appendChild(dots)
    child.appendChild(menu)

    dots.addEventListener('click', openFileMenu)

    var parent = document.getElementById("results-files");
    mainFiles.add(child);

    parent.appendChild(child);
  }
}

function showSpecialFiles(element, listName) {
  var list = titleDict[listName]

  // if classifier being selected
  if (tagToggles[element.id]){
      if (checkNum == 1 && !checkSpecial){
        checkNum += 1
        var parent= document.getElementById("results-files")
        var children = parent.children
        if (children.length > 2){
          for (var i = 0; i < 2; i++){
            // console.log(children[i].id)
            parent.removeChild(children[i])
          }
        }
      }

      else if ((checkNum == 1 && checkSpecial) && (element.id == "finance" || element.id == "bitcoin")){
        checkNum += 1
        var parent = document.getElementById("main-results");
        var child = document.getElementById("results-files")
        parent.removeChild(child)

        var newChild = renderSpecialFiles(financeBitcoinTitles)

        parent.appendChild(newChild)

      }

      else if (checkNum == 0) {
        checkNum += 1
        checkName = list

        var parent = document.getElementById("main-results");
        var child = document.getElementById("results-files")
        parent.removeChild(child)

        var newChild = renderSpecialFiles(list)

        parent.appendChild(newChild)
      }
      else {
        checkNum += 1
      }
  }


  // if classifier is being deselected
  else {
    if (checkNum == 1){
      checkNum = 0
      checkName = ''

      var parent = document.getElementById("main-results");
      var child = document.getElementById("results-files")
      parent.removeChild(child)

      var newChild = renderSpecialFiles(titles)

      parent.appendChild(newChild)
    }

    else if (checkNum == 2) {
      checkNum = 1
      list = checkName

      var parent = document.getElementById("main-results");
      var child = document.getElementById("results-files")
      parent.removeChild(child)

      var newChild = renderSpecialFiles(list)

      parent.appendChild(newChild)

    }
    else {
      checkNum -= 1
    }
  }
}

function renderSpecialFiles(titleArray){

  var newChild = document.createElement("div")
  newChild.setAttribute("id", "results-files")

  for (var i = 0; i < titleArray.length; i++){

    var randomIndex = Math.floor(Math.random() * 5)

    var checkbox = document.createElement("img")
    checkbox.setAttribute("src", "images/checkbox.png")
    checkbox.setAttribute("class", "result-file-checkbox")

    var filename = document.createElement("span")
    filename.setAttribute("class", "result-filename")
    filename.innerHTML = titleArray[i]

    var date = document.createElement("span")
    date.setAttribute("class", "result-date-uploaded")
    date.innerHTML = dates[i]

    var uploader = document.createElement("span")
    uploader.setAttribute("class", "result-uploaded-by")
    uploader.innerHTML = contributors[randomIndex]

    var dots = document.createElement("i");
    dots.className = "fas fa-ellipsis-v file-dots";

    var menu = createMenu();

    var child = document.createElement("div")
    child.setAttribute("id", "sample-result-"+i)
    child.setAttribute("class", "result-file")

    child.appendChild(checkbox)
    child.appendChild(filename)
    child.appendChild(date)
    child.appendChild(uploader)
    child.appendChild(dots)
    child.appendChild(menu)

    newChild.appendChild(child)

  }
  return newChild
}

function fillFilteringMap() {
  for (var k in classifiersToTitles) {
    for (var i = 0; i < classifiersToTitles[k].length; i++) {
      var filter = k;
      var entry  = getFileEltFromName(classifiersToTitles[k][i]);
      updateFilterMap(filter, entry);
    }
  }
}
