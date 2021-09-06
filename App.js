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
let printBtn = document.createElement('button')
printBtn.innerHTML = 'PRINT LIST'
printBtn.addEventListener('click', function(){
  printArmyList()
})

let charArray = []
let armyList = []
let armyDivIndex = 0

leftDiv.appendChild(tierBtnsDiv)
leftDiv.appendChild(charSelectDiv)

rightDiv.appendChild(totalPntsDiv)
rightDiv.appendChild(armyDiv)

document.body.appendChild(printBtn)
document.body.appendChild(leftDiv)
document.body.appendChild(rightDiv)

//Set points counter value to 0
let totalPoints = 0

//Add weapons to the Army List
function addWpn(e, wpn, id) {
  let category
  let name
  let points
  let rangeint
  let lethality
  let pen 
  for (let i = 0; i < armyList.length; i++){
    if (id == armyList[i].id && wpn.rangeint != undefined){
      armyList[i].weapons.push(wpn)
    }else if (id == armyList[i].id && wpn.rangeint == undefined){
      armyList[i].equipment.push(wpn)
    }
  }
  if (wpn.rangeint === undefined){
    rangeint = ''
  }else {
    rangeint = wpn.rangeint
  }
  if (wpn.lethality === undefined){
    lethality = ''
  }else {
    lethality = wpn.lethality
  }
  if (wpn.pen === undefined){
    pen = ''
  }else {
    pen = wpn.pen
  }
  if (wpn.category === undefined){
    category = wpn.equipType
  }else {
    category = wpn.category
  }

  let wpnDiv = document.createElement('div')
  let wpnClass = document.createElement('p')
  let wpnName = document.createElement('p')
  let wpnPts = document.createElement('p')
  let wpnRngInt = document.createElement('p')
  let wpnLeth = document.createElement('p')
  let wpnPen = document.createElement('p')

  wpnDiv.className = 'wpnDiv'
  wpnClass.innerHTML =category
  wpnClass.className = 'wpnStat'
  wpnName.innerHTML = wpn.name
  wpnName.className = 'wpnStat'
  wpnPts.innerHTML = wpn.points
  wpnPts.className = 'wpnStat'
  wpnRngInt.innerHTML = rangeint
  wpnRngInt.className = 'wpnStat'
  wpnLeth.innerHTML = lethality
  wpnLeth.className = 'wpnStat'
  wpnPen.innerHTML = pen
  wpnPen.className = 'wpnStat'

  wpnDiv.appendChild(wpnClass)
  wpnDiv.appendChild(wpnName)
  wpnDiv.appendChild(wpnPts)
  wpnDiv.appendChild(wpnRngInt)
  wpnDiv.appendChild(wpnLeth)
  wpnDiv.appendChild(wpnPen)

  if (wpn.points !== 'N/A') {
    totalPoints = totalPoints + wpn.points
    document.getElementById('armyPoints').innerHTML = ''
    document.getElementById('armyPoints').innerHTML = 'Total Points: ' + totalPoints
  }
  document.getElementById('wpnStatDiv' + id).appendChild(wpnDiv)
}

//post and display weapons list
function addWeapon(e) {
  let id = e.srcElement.id
  id = id.replace('wpnBtn', '')
  document.getElementById('charSelectDiv').innerHTML = ''

  let wpnContainer = document.createElement('div')  

  for (let i = 0; i < data[1].weapons.length; i++) {
    let wpnRules = data[1].weapons[i].specialRules

    let wpnRulesDiv = document.createElement("div")
    wpnRulesDiv.className = 'wpnRulesDiv'

    for (let h = 0; h < wpnRules.length; h++){
      let wpnRulesData = document.createElement('p')
      wpnRulesData.className = 'wpnData'
      wpnRulesData.innerHTML = wpnRules[h].name + ', '

      wpnRulesDiv.appendChild(wpnRulesData)
    }

    let wpnDiv = document.createElement('div')
    let wpnClass = document.createElement('p')
    let wpnName = document.createElement('p')
    let wpnPts = document.createElement('p')
    let wpnRngInt = document.createElement('p')
    let wpnLeth = document.createElement('p')
    let wpnPen = document.createElement('p')
    let wpnBtn = document.createElement('button')   

    wpnDiv.className = 'wpnDiv'
    wpnClass.innerHTML = data[1].weapons[i].category
    wpnClass.className = 'wpnStat'
    wpnName.innerHTML = data[1].weapons[i].name
    wpnName.className = 'wpnStat'
    wpnPts.innerHTML = 'Points \n' + data[1].weapons[i].points
    wpnPts.className = 'wpnStat'
    wpnRngInt.innerHTML = data[1].weapons[i].rangeint
    wpnRngInt.className = 'wpnStat'
    wpnLeth.innerHTML = data[1].weapons[i].lethality
    wpnLeth.className = 'wpnStat'
    wpnPen.innerHTML = data[1].weapons[i].pen
    wpnPen.className = 'wpnStat'
    wpnBtn.innerHTML = 'Add Weapon'
    wpnBtn.id = 'wpnBtn'

    wpnDiv.appendChild(wpnClass)
    wpnDiv.appendChild(wpnName)
    wpnDiv.appendChild(wpnPts)
    wpnDiv.appendChild(wpnRngInt)
    wpnDiv.appendChild(wpnLeth)
    wpnDiv.appendChild(wpnPen)
    wpnDiv.appendChild(wpnBtn)
    
    wpnContainer.appendChild(wpnDiv)
    wpnContainer.appendChild(wpnRulesDiv)

    wpnBtn.addEventListener('click', function (e) {
      addWpn(e, data[1].weapons[i], id)
      addEquip(e, id)
      wpnBtn.disabled = true
    })
  }
  document.getElementById('charSelectDiv').appendChild(wpnContainer)
}

function addEquip(e, id) {
  // let id = e.srcElement.id

  //id = id.replace('eqpBtn', '')
  console.log(id)
  document.getElementById('charSelectDiv').innerHTML = ''

  let eqpContainer = document.createElement('div')  

  for (let i = 0; i < data[2].equipment.length; i++) {

    let eqpDiv = document.createElement('div')
    let eqpClass = document.createElement('p')
    let eqpName = document.createElement('p')
    let eqpPts = document.createElement('p')
    let eqpBtn = document.createElement('button')   

    eqpDiv.className = 'wpnDiv'
    eqpClass.innerHTML = data[2].equipment[i].equipType
    eqpClass.className = 'wpnStat'
    eqpName.innerHTML = data[2].equipment[i].name
    eqpName.className = 'wpnStat'
    eqpPts.innerHTML = 'Points \n' + data[2].equipment[i].points
    eqpBtn.innerHTML = 'Add Equipment'
    eqpBtn.id = 'eqpBtn'

    eqpDiv.appendChild(eqpClass)
    eqpDiv.appendChild(eqpName)
    eqpDiv.appendChild(eqpPts)
    eqpDiv.appendChild(eqpBtn)
    
    eqpContainer.appendChild(eqpDiv)

    eqpBtn.addEventListener('click', function (e) {
      addWpn(e, data[2].equipment[i], id)
      eqpBtn.disabled = true
    })
  }
  document.getElementById('charSelectDiv').appendChild(eqpContainer)
}

//add character to army list
function addModel(e) {
  let newID = Date.now()
  
  let characterProfile =  {
    id: '',
    model: {

    },
    weapons:[],
    equipment:[]
  }

  armyDivIndex = armyDivIndex + 1
  let character

  for (let i = 0; i < data[0].tier.length; i++) {
    for (let j = 0; j < data[0].tier[i].model.length; j++) {
      if (e.srcElement.innerHTML === data[0].tier[i].model[j].modelName) {
        character = data[0].tier[i].model[j]
      }
    }
  }

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

  charArray.push(character)

  characterProfile.id = newID
  characterProfile.model = character
  armyList.push(characterProfile)

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
  wpnStatDiv.className = 'wpnStatDiv'

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

    document.getElementById('charSelectDiv').innerHTML = ''
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
  button.className = 'tierButton'
  document.getElementById(tierList[i]).addEventListener("click", forceDetail);
}

function deleteComponent(){

}

function printArmyList(){
  printBtn.disabled = true
  console.log(armyList)
  // document.body.innerHTML = ''
  leftDiv.style.display = 'none'
  rightDiv.style.display = 'none'
  let backBtn = document.createElement('button')
  backBtn.innerHTML = 'Back to Creation'
  backBtn.id = 'backBtn'
  document.body.appendChild(backBtn)
  backBtn.addEventListener('click', function(){
    backBtnFunc()
  })

  for (let i = 0; i < armyList.length; i++){
    let printDiv = document.createElement('div')
    let headerDiv = document.createElement('div')
    headerDiv.className = 'pHeaderDiv'
    let headerStatDiv = document.createElement('div')
    headerStatDiv.className = 'pHeaderStatDiv'
    let modelNameDiv = document.createElement('div')
    modelNameDiv.className = 'pModelNameDiv'
    let levelDiv = document.createElement('div')
    levelDiv.className = 'pLevelDiv'
    let pointDiv = document.createElement('div')
    pointDiv.className = 'pPointDiv'
    let totPointDiv = document.createElement('div')
    totPointDiv.className = 'pTotPointDiv'
    let modelStatsDiv = document.createElement('div')
    modelStatsDiv.className = 'pModelStatsDiv'
    let modelStatTitleDiv = document.createElement('div')
    modelStatTitleDiv.className = 'pModelStatTitleDiv'
    let modelStatDiv = document.createElement('div')
    modelStatDiv.className = 'pModelStatDiv'
    let wpnDiv = document.createElement('div')
    wpnDiv.className = 'pWpnDiv'
    let wpnStatTitleDiv = document.createElement('div')
    wpnStatTitleDiv.className = 'pWpnStatTitleDiv'
    let wpnStatDiv = document.createElement('div')
    wpnStatDiv.className = 'pWpnStatDiv'
    let wpnSpecRuleDiv = document.createElement('div')
    wpnSpecRuleDiv.className = 'pWpnSpecRuleDiv'
    let equipDiv = document.createElement('div')
    let equipStatTitleDiv = document.createElement('div')
    let equipStatDiv = document.createElement('div')
    let equipSpecRuleDiv = document.createElement('div')
    let wpnStatContainer = document.createElement('div')
    wpnStatContainer.className = 'pWpnStatContainer'

    let modelName = document.createElement('h1')
    modelName.innerHTML = armyList[i].model.modelName
    let modelLevel = document.createElement('h3')
    modelLevel.innerHTML = 'Level: ' + armyList[i].model.level
    let modelPoints = document.createElement ('h3')
    modelPoints.innerHTML = 'Points: ' + armyList[i].model.points
    let modelStatTitleCd = document.createElement('h3')
    modelStatTitleCd.innerHTML = 'CD'
    let modelStatTitleAg = document.createElement('h3')
    modelStatTitleAg.innerHTML = 'AG'
    let modelStatTitleSg = document.createElement('h3')
    modelStatTitleSg.innerHTML = 'SG'
    let modelStatTitleDc = document.createElement('h3')
    modelStatTitleDc.innerHTML = 'DC'
    let modelStatTitleMe = document.createElement('h3')
    modelStatTitleMe.innerHTML = 'ME'
    let modelStatCd = document.createElement('h3')
    modelStatCd.innerHTML = armyList[i].model.stats[0].statValue
    let modelStatAg = document.createElement('h3')
    modelStatAg.innerHTML = armyList[i].model.stats[1].statValue
    let modelStatSg = document.createElement('h3')
    modelStatSg.innerHTML = armyList[i].model.stats[2].statValue
    let modelStatDc = document.createElement('h3')
    modelStatDc.innerHTML = armyList[i].model.stats[3].statValue
    let modelStatMe = document.createElement('h3')
    modelStatMe.innerHTML = armyList[i].model.stats[4].statValue

    for (let h = 0; h < armyList[i].weapons.length; h++){
      let weapons = armyList[i].weapons[h]
      let wpnName = document.createElement('h3')
      wpnName.className = 'pWpnstat'
      wpnName.id = 'pWpnstat1'
      let wpnPoints = document.createElement('h3')
      wpnPoints.className = 'pWpnStat'
      wpnPoints.id = 'pWpnstat2'
      let wpnleth = document.createElement('h3')
      wpnleth.className = 'pWpnStat'
      wpnleth.id = 'pWpnstat3'
      let wpnRngInt = document.createElement('h3')
      wpnRngInt.className = 'pWpnStat'
      wpnRngInt.id = 'pWpnstat4'
      let wpnPen = document.createElement('h3')
      wpnPen.className = 'pWpnStat'
      wpnPen.id = 'pWpnstat5'
      let wpnSpcRules = document.createElement('div')
      wpnSpcRules.className = 'pWpnSpcRl'
      wpnSpcRules.id = 'pWpnstat6'

      wpnName.innerHTML = armyList[i].weapons[h].name
      wpnPoints.innerHTML = weapons.points
      wpnleth.innerHTML = weapons.lethality
      wpnRngInt.innerHTML = weapons.rangeint
      wpnPen.innerHTML = weapons.pen
      console.log(wpnName)

      for (let j = 0; j < weapons.specialRules.length; j++){
        let sr = weapons.specialRules[j]
        let srName =  document.createElement('h4')
        let srDesc = document.createElement('h4')

        srName.innerHTML = sr.name + ': ' + sr.desc
        //srDesc.innerHTML = sr.desc

        wpnSpcRules.appendChild(srName)
        wpnSpcRules.appendChild(srDesc)
      }

      wpnStatContainer.appendChild(wpnName)
      wpnStatContainer.appendChild(wpnPoints)
      wpnStatContainer.appendChild(wpnRngInt)
      wpnStatContainer.appendChild(wpnleth)
      wpnStatContainer.appendChild(wpnPen)
      wpnStatContainer.appendChild(wpnSpcRules)
     
      wpnStatDiv.appendChild(wpnStatContainer)
      wpnDiv.appendChild(wpnStatDiv)
    }

    printDiv.id = 'printDiv'
    printDiv.innerHTML = ''
    modelStatDiv.appendChild(modelStatCd)
    modelStatDiv.appendChild(modelStatAg)
    modelStatDiv.appendChild(modelStatSg)
    modelStatDiv.appendChild(modelStatDc)
    modelStatDiv.appendChild(modelStatMe)
    modelNameDiv.appendChild(modelName)
    levelDiv.appendChild(modelLevel)
    pointDiv.appendChild(modelPoints)
    headerDiv.appendChild(modelNameDiv)
    headerDiv.appendChild(headerStatDiv)
    headerStatDiv.appendChild(levelDiv)
    headerStatDiv.appendChild(pointDiv)
    headerStatDiv.appendChild(totPointDiv)
    modelStatTitleDiv.appendChild(modelStatTitleCd)
    modelStatTitleDiv.appendChild(modelStatTitleAg)
    modelStatTitleDiv.appendChild(modelStatTitleSg)
    modelStatTitleDiv.appendChild(modelStatTitleDc)
    modelStatTitleDiv.appendChild(modelStatTitleMe)
    modelStatsDiv.appendChild(modelStatTitleDiv)
    modelStatsDiv.appendChild(modelStatDiv)
    wpnDiv.appendChild(wpnStatTitleDiv)
    //wpnDiv.appendChild(wpnStatDiv)
    wpnDiv.appendChild(wpnSpecRuleDiv)
    equipDiv.appendChild(equipStatTitleDiv)
    equipDiv.appendChild(equipStatDiv)
    equipDiv.appendChild(equipSpecRuleDiv)
    printDiv.appendChild(headerDiv)
    printDiv.appendChild(modelStatsDiv)
    printDiv.appendChild(wpnDiv)
    printDiv.appendChild(equipDiv)
    document.body.appendChild(printDiv)
  }

}

function backBtnFunc(){
  leftDiv.style.display = "initial"
  rightDiv.style.display = 'initial'
  document.getElementById('backBtn').style.display = 'none'
  printBtn.disabled = false
  // document.getElementById('printDiv').style.display = 'none'
  // document.getElementById('printDiv').innerHTML = ''
}

/*
need an Army list class/object array
need to pass id

*/

