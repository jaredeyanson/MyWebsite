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

leftDiv.appendChild(tierBtnsDiv)
leftDiv.appendChild(charSelectDiv)

rightDiv.appendChild(totalPntsDiv)
rightDiv.appendChild(armyDiv)

document.body.appendChild(leftDiv)
document.body.appendChild(rightDiv)

//Set points counter value to 0
let totalPoints = 0


//add character to army list
function addModel(e) {
  let character

  for (let i = 0; i < data[0].tier.length; i++) {
    console.log('loop')
    for (let j = 0; j < data[0].tier[i].model.length; j++) {
      if (e.srcElement.innerHTML === data[0].tier[i].model[j].modelName) {
        character = data[0].tier[i].model[j]
      }
    }
  }
  console.log(character)

  totalPoints = totalPoints + character.points

  let armyPoints = document.createElement('h1')
  armyPoints.id = 'armyPoints'

  let modelDiv = document.createElement('div')
  let modelname = document.createElement('h1')

  modelDiv.className = 'modelDiv'
  modelname.className = 'charName'

  modelname.innerHTML = character.modelName

  totalPntsDiv.appendChild(armyPoints)
  modelDiv.appendChild(modelname)
  rightDiv.appendChild(modelDiv)
  document.getElementById("armyPoints").innerHTML = totalPoints


}

//present character options to user
function forceDetail(e) {
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

  for (let i = 0; i < characterInfo.length; i++) {
    let newDiv = document.createElement("div")
    let button = document.createElement("button")
    let points = document.createElement("h1")
    let level = document.createElement("h1")
    let statDiv = document.createElement("div")
    document.getElementById(tier).disabled = true

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



    charSelectDiv.appendChild(button)
    charSelectDiv.appendChild(level)
    charSelectDiv.appendChild(points)
    charSelectDiv.appendChild(newDiv)
    charSelectDiv.appendChild(statDiv)
    charSelectDiv.appendChild(charDiv)
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