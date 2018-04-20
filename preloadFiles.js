console.log('here')
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

var specialTitles = [
  "AdoptionOfBlockChain.jpg",
  "BitcoinAndBanking.pdf",
  "BitcoinBasics.doc",
  "CurrencyOnline.jpeg",
  "BitcoinTrendsGraph.png",
  "ManagementInTech.pdf",
  "BlockChainAndBitcoin"
]

var contributors = [
  "Sara Tollestrup",
  "Kyle Bridburg",
  "Santiago Munoz",
  "Rebecca Weinberger",
  "Me"
]

var dates = [
  "04/19/18",
  "03/30/18",
  "02/20/18",
  "02/06/18",
  "01/08/18",
  "07/09/17",
  "05/10/17",
  "04/13/17",
  "03/29/17",
  "02/30/17",
  "01/23/17",
  "05/09/16",
  "04/05/16",
  "03/03/16",
  "02/08/16",
  "01/01/15",
  "01/15/15",
  "01/10/15",
  "01/09/15",
  "01/04/15",
  "01/03/15",
  "01/01/15"
]

function loadFiles () {
  for (var i = 0; i < dates.length; i++){

    var randomIndex = Math.floor(Math.random() * 5)

    var checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("class", "result-file-checkbox")

    var filename = document.createElement("span")
    filename.setAttribute("class", "result-filename")
    filename.innerHTML = titles[i]
    filename.prepend(checkbox)

    var date = document.createElement("span")
    date.setAttribute("class", "result-date-uploaded")
    date.innerHTML = dates[i]

    var uploader = document.createElement("span")
    uploader.setAttribute("class", "result-uploaded-by")
    uploader.innerHTML = contributors[randomIndex]

    var child = document.createElement("div")
    child.setAttribute("id", "sample-result-"+i)
    child.setAttribute("class", "result-file")

    child.appendChild(filename)
    child.appendChild(date)
    child.appendChild(uploader)

    var parent = document.getElementById("results-files");
    parent.appendChild(child)
  }
}

function showSpecialFiles() {
  // console.log("check")
  var parent = document.getElementById("main-results");
  var child = document.getElementById("results-files")
  parent.removeChild(child)

  var newChild = document.createElement("div")
  newChild.setAttribute("class", "results-files")



  for (var i = 0; i < specialTitles.length; i++){

    var randomIndex = Math.floor(Math.random() * 5)

    var checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("class", "result-file-checkbox")

    var filename = document.createElement("span")
    filename.setAttribute("class", "result-filename")
    filename.innerHTML = specialTitles[i]
    filename.prepend(checkbox)

    var date = document.createElement("span")
    date.setAttribute("class", "result-date-uploaded")
    date.innerHTML = dates[i]

    var uploader = document.createElement("span")
    uploader.setAttribute("class", "result-uploaded-by")
    uploader.innerHTML = contributors[randomIndex]

    var child = document.createElement("div")
    child.setAttribute("id", "sample-result-"+i)
    child.setAttribute("class", "result-file")

    child.appendChild(filename)
    child.appendChild(date)
    child.appendChild(uploader)

    newChild.appendChild(child)
  }

  parent.appendChild(newChild)

}
