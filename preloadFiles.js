var checkNum = 0;
var checkName = '';

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
  "BitcoinBasics.doc",
  "CurrencyOnline.jpeg",
  "BitcoinTrendsGraph.png",
  "ManagementInTech.pdf",
  "BlockChainAndBitcoin"
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
  "01/04/15"
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

function showSpecialFiles(element, listName) {
  // console.log("check")

  if (element.checked == false){

      if (checkNum == 1){
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

      else if (checkNum == 0) {
        checkNum += 1
        checkName = listName



        var parent = document.getElementById("main-results");
        var child = document.getElementById("results-files")
        parent.removeChild(child)

        var newChild = document.createElement("div")
        newChild.setAttribute("id", "results-files")



        for (var i = 0; i < listName.length; i++){

          var randomIndex = Math.floor(Math.random() * 5)

          var checkbox = document.createElement("input")
          checkbox.setAttribute("type", "checkbox")
          checkbox.setAttribute("class", "result-file-checkbox")

          var filename = document.createElement("span")
          filename.setAttribute("class", "result-filename")
          filename.innerHTML = listName[i]
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
      else {
        checkNum += 1
      }
  }

  else {

    if (checkNum == 1){
      checkNum = 0
      checkName = ''

      var parent = document.getElementById("main-results");
      var child = document.getElementById("results-files")
      parent.removeChild(child)

      var newChild = document.createElement("div")
      newChild.setAttribute("id", "results-files")



      for (var i = 0; i < titles.length; i++){

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

        newChild.appendChild(child)
      }

      parent.appendChild(newChild)
    }

    else if (checkNum == 2) {
      checkNum = 1
      listName = checkName

      var parent = document.getElementById("main-results");
      var child = document.getElementById("results-files")
      parent.removeChild(child)

      var newChild = document.createElement("div")
      newChild.setAttribute("id", "results-files")



      for (var i = 0; i < listName.length; i++){

        var randomIndex = Math.floor(Math.random() * 5)

        var checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        checkbox.setAttribute("class", "result-file-checkbox")

        var filename = document.createElement("span")
        filename.setAttribute("class", "result-filename")
        filename.innerHTML = listName[i]
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
    else {
      checkNum -= 1
    }

  }




}
