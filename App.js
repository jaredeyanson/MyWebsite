// Add basic page elements for the layout
let leftDiv = document.createElement('div')
leftDiv.id = 'leftDiv'
let rightDiv = document.createElement('div')
rightDiv.id = 'rightDiv'
let totalPntsDiv = document.createElement('div')
totalPntsDiv.id = 'totatPntsDiv'
let tierBtnsDiv = document.createElement('div')
tierBtnsDiv.id = 'tierBtnDiv'
let charSelectDiv = document.createElement('div')
charSelectDiv.id = 'charSelectDiv'
let armyDiv = document.createElement('div')
armyDiv.id = 'armyDiv'

let charArray = []
let armyDivIndex = 0

leftDiv.appendChild(tierBtnsDiv)
leftDiv.appendChild(charSelectDiv)

rightDiv.appendChild(totalPntsDiv)
rightDiv.appendChild(armyDiv)

document.body.appendChild(leftDiv)
document.body.appendChild(rightDiv)

//Set points counter value to 0
let totalPoints = 0

function addWeapon(e){
  let id = e.srcElement.id
  id = id.replace('wpnBtn', '')
  document.getElementById('charSelectDiv').innerHTML = ''


  // function forceDetail(e) {
  //   //document.getElementById('charSelectDiv').innerHTML = ''
  //   // document.getElementById('charDiv').innerHTML = ''
  //   let characterInfo
  //   let tier
  //   for (let i = 0; i < data[0].tier.length; i++) {
  //     if (e.srcElement.innerHTML === data[0].tier[i].name) {
  //       characterInfo = data[0].tier[i].model
  //       tier = data[0].tier[i].name
  //     }
  //   }
  
  //   let charDiv = document.createElement('div')
  
  //   charDiv.id = 'charDiv'
  
  //   //$("#charDiv").load("#charDiv .reloaded-divs > *");
  //   //document.getElementById('charDiv').load('charDiv')
  //   //load("index.html", document.getElementById("charDiv"))
  
  //   for (let i = 0; i < characterInfo.length; i++) {
  //     let newDiv = document.createElement("div")
  //     let button = document.createElement("button")
  //     let points = document.createElement("h1")
  //     let level = document.createElement("h1")
  //     let statDiv = document.createElement("div")
  //     //document.getElementById(tier).disabled = true
  
  //     button.innerHTML = characterInfo[i].modelName
  //     button.id = characterInfo[i].modelName
  //     button.className = 'charButton'
  //     points.innerHTML = "Points: " + characterInfo[i].points
  //     level.innerHTML = "Level: " + characterInfo[i].level
  //     newDiv.className = 'characters'
  //     statDiv.className = "statDiv"
  
  //     for (let h = 0; h < characterInfo[i].stats.length; h++) {
  //       let stat = document.createElement('h1')
  //       stat.innerHTML = characterInfo[i].stats[h].statAbbr
  //       stat.id = 'statTitle'
  //       statDiv.appendChild(stat)
  //     }
  
  //     for (let h = 0; h < characterInfo[i].stats.length; h++) {
  //       let stat = document.createElement('h1')
  //       stat.id = "statValue"
  //       stat.innerHTML = characterInfo[i].stats[h].statValue
  //       statDiv.appendChild(stat)
  //     }
  
  
  
  //     charDiv.appendChild(button)
  //     charDiv.appendChild(level)
  //     charDiv.appendChild(points)
  //     charDiv.appendChild(newDiv)
  //     charDiv.appendChild(statDiv)
  //     //charSelectDiv.appendChild(charDiv)
  //     //document.getElementById('charSelectDiv').innerHTML = charSelectDiv
      
  //     document.getElementById('charSelectDiv').innerHTML = ''
  //     charSelectDiv.appendChild(charDiv)
  //     //document.getElementById('charSelectDiv').innerHTML = charDiv
  //     document.getElementById(characterInfo[i].modelName).addEventListener("click", addModel);
      
  
  //   }
  // }
}

function addEquip(e){
  let id = e.srcElement.id
  id = id.replace('eqpBtn', '')
  document.getElementById('charSelectDiv').innerHTML = ''
}

//add character to army list
function addModel(e) {
  
  armyDivIndex = armyDivIndex + 1
  let character

  for (let i = 0; i < data[0].tier.length; i++) {
    for (let j = 0; j < data[0].tier[i].model.length; j++) {
      if (e.srcElement.innerHTML === data[0].tier[i].model[j].modelName) {
        character = data[0].tier[i].model[j]
      }
    }
  }

  //character.id = newID

  let statDiv = document.createElement('div')
  statDiv.className = 'statDiv'


  for (let h = 0; h < character.stats.length; h++) {
    let stat = document.createElement('h2')
    stat.innerHTML = character.stats[h].statAbbr
    stat.id = 'statTitle'
    statDiv.appendChild(stat)
  }

  for (let h = 0; h < character.stats.length; h++) {
    let stat = document.createElement('h2')
    stat.id = "statValue"
    stat.innerHTML = character.stats[h].statValue
    statDiv.appendChild(stat)
  }

  // console.log(document.body.childNodes.length)
  charArray.push(character)

  // let charArrayLength = charArray.length - 1 
  // let lastID = charArray[charArrayLength].id
  let newID = Date.now()
  //character.id = newID
  
  // console.log(charArrayLength)
  // console.log(lastID)
  // console.log(newID)
  console.log(newID)
  //console.log(charArray)

  totalPoints = totalPoints + character.points

  let armyPoints = document.createElement('h1')
  armyPoints.id = 'armyPoints'

  let modelDiv = document.createElement('div')
  let modelname = document.createElement('h1')
  let modelPoints = document.createElement('h2')
  let modelLevel = document.createElement('h2')
  let weapButton = document.createElement('button')
  let equipButton = document.createElement('button')
  let charBtnDiv = document.createElement('div')
  let pointsDiv = document.createElement('div')
  let wpnStatDiv = document.createElement('div')
  let eqpStatDiv = document.createElement('div')

  modelDiv.className = 'modelDiv'
  modelDiv.id = 'div' + newID
  modelname.className = 'charName'
  modelPoints.className = 'modelPoints'
  modelLevel.className = 'ModelLevel'
  pointsDiv.className = 'pointsDiv'

  modelname.innerHTML = character.modelName
  modelLevel.innerHTML = 'Level: ' + character.level
  modelPoints.innerHTML = 'Points: ' + character.points
  weapButton.innerHTML = 'Add Weapon'
  weapButton.id = 'wpnBtn' + newID
  equipButton.innerHTML = 'Add Equipment'
  equipButton.id = 'eqpBtn' + newID
  wpnStatDiv.id = 'wpnStatDiv' + newID
  eqpStatDiv.id = 'eqpStatDiv' + newID
  //document.getElementById('weapBtn').addEventListener("click", addWeapon);

  charBtnDiv.appendChild(weapButton)
  charBtnDiv.appendChild(equipButton)
  totalPntsDiv.appendChild(armyPoints)
  modelDiv.appendChild(modelname)
  pointsDiv.appendChild(modelLevel)
  pointsDiv.appendChild(modelPoints)
  modelDiv.appendChild(charBtnDiv)
  modelDiv.appendChild(pointsDiv)
  modelDiv.appendChild(statDiv)
  modelDiv.appendChild(wpnStatDiv)
  modelDiv.appendChild(eqpStatDiv)
  rightDiv.appendChild(modelDiv)
  document.getElementById('wpnBtn' + newID).addEventListener('click', addWeapon)
  document.getElementById('eqpBtn' + newID).addEventListener('click', addEquip)
  document.getElementById("armyPoints").innerHTML = 'Total Army Points:   ' + totalPoints
}

//present character options to user
function forceDetail(e) {
  //document.getElementById('charSelectDiv').innerHTML = ''
  // document.getElementById('charDiv').innerHTML = ''
  let characterInfo
  let tier
  for (let i = 0; i < data[0].tier.length; i++) {
    if (e.srcElement.innerHTML === data[0].tier[i].name) {
      characterInfo = data[0].tier[i].model
      tier = data[0].tier[i].name
    }
  }

  let charDiv = document.createElement('div')

  charDiv.id = 'charDiv'

  //$("#charDiv").load("#charDiv .reloaded-divs > *");
  //document.getElementById('charDiv').load('charDiv')
  //load("index.html", document.getElementById("charDiv"))

  for (let i = 0; i < characterInfo.length; i++) {
    let newDiv = document.createElement("div")
    let button = document.createElement("button")
    let points = document.createElement("h1")
    let level = document.createElement("h1")
    let statDiv = document.createElement("div")
    //document.getElementById(tier).disabled = true

    button.innerHTML = characterInfo[i].modelName
    button.id = characterInfo[i].modelName
    button.className = 'charButton'
    points.innerHTML = "Points: " + characterInfo[i].points
    level.innerHTML = "Level: " + characterInfo[i].level
    newDiv.className = 'characters'
    statDiv.className = "statDiv"

    for (let h = 0; h < characterInfo[i].stats.length; h++) {
      let stat = document.createElement('h1')
      stat.innerHTML = characterInfo[i].stats[h].statAbbr
      stat.id = 'statTitle'
      statDiv.appendChild(stat)
    }

    for (let h = 0; h < characterInfo[i].stats.length; h++) {
      let stat = document.createElement('h1')
      stat.id = "statValue"
      stat.innerHTML = characterInfo[i].stats[h].statValue
      statDiv.appendChild(stat)
    }



    charDiv.appendChild(button)
    charDiv.appendChild(level)
    charDiv.appendChild(points)
    charDiv.appendChild(newDiv)
    charDiv.appendChild(statDiv)
    //charSelectDiv.appendChild(charDiv)
    //document.getElementById('charSelectDiv').innerHTML = charSelectDiv
    
    document.getElementById('charSelectDiv').innerHTML = ''
    charSelectDiv.appendChild(charDiv)
    //document.getElementById('charSelectDiv').innerHTML = charDiv
    document.getElementById(characterInfo[i].modelName).addEventListener("click", addModel);
    

  }
}

//get tier names 
let tierList = data[0].tier.map((e) => {
  return e.name
})

//add tier selection buttons
for (let i = 0; i < tierList.length; i++) {
  let button = document.createElement("button")
  button.innerHTML = tierList[i]
  tierBtnsDiv.appendChild(button)
  button.id = tierList[i]
  document.getElementById(tierList[i]).addEventListener("click", forceDetail);
}