import humanoidCharacterStats from './humanoid.json' with { type: 'json' };
import mythicCharacterStats from './mythic.json' with { type: 'json' };
import alienCharacterStats from './alien.json' with { type: 'json' };
import creatureCharacterStats from './creature.json' with { type: 'json' };
import HumanoidSpecies from './humanoidSpeciesList.json' with { type: 'json' };
import MythicSpecies from './mythicSpeciesList.json' with { type: 'json' };
import AlienSpecies from './alienSpeciesList.json' with { type: 'json' };
import CreatureSpecies from './creatureSpeciesList.json' with { type: 'json' };
import generalCharacterStats from './generalCharacterStats.json' with { type: 'json' };

function humanoidToList(character, species) {
    switch (true){
        case character == "humanoid":
            var options = HumanoidSpecies[species];
            break;
        case character == "mythic":
            var options = MythicSpecies[species];
            break;
        case character == "alien":
            var options = AlienSpecies[species];
            break;
        case character == "creature":
            var options = CreatureSpecies[species];
            break;
    }
    return options;
}
function humanoidSpeciesToList(character, species,id) {
    switch (true){
        case character == "humanoid":
            var options = humanoidCharacterStats[character][species][id];
            break;
        case character == "mythic":
            var options = mythicCharacterStats[character][species][id];
            break;
        case character == "alien":
            var options = alienCharacterStats[character][species][id];
            break;
        case character == "creature":
            var options = creatureCharacterStats[character][species][id];
            break;
    } 
    return options;
}



function generalToList(id) {
    switch (true) {
        case id === "superList":
            var options = generalCharacterStats[id];
            break;
        case id === "proficiencyList":
            var options = generalCharacterStats[id];
            break;
        case id === "positiveList":
            var options = generalCharacterStats["personality"][id];
            break;
        case id === "negativeList":
            var options = generalCharacterStats["personality"][id];
            break;
        case id === "neutralList":
            var options = generalCharacterStats["personality"][id];
            break;
    }
    return options;
}

function randomLine(list) {
    var element = Math.floor(Math.random() * list.length);
    return list[element];
}
function printFullList(list){
    var string ="";
    for(const element of list){
        string += element +" ";
    }
    return string;
}

function returnSpecies(character, species) {
    var listFunction = humanoidToList(character, species);
    var list = listFunction;
    var species = randomLine(list);
    document.getElementById("speciesList").innerText = species;
    return species;
}

function returnElement(character, species, id) {
    var listFunction = humanoidSpeciesToList(character, species,id);
    switch(true){
        case id === "personality":
            document.getElementById(id).innerText = getPersonalities();
            return;
        case id === "proficiencyList":
            document.getElementById(id).innerText = getProficiencies(id);
            return;
        case id === "ageRange":
            var list = listFunction;
            var age = Math.floor(Math.random() * list);
            document.getElementById(id).innerText = age;
            return age;
        case id === "superList2":
            var newID = id.substring(0, id.length - 1);
            var list = generalToList(newID);
            document.getElementById(id).innerText = randomLine(list);
            return;
        case id === "originLocation" || id ==="diet" || id ==="element" || id ==="threatLevel":
            var list = listFunction;
            document.getElementById(id).innerText = list;
            return;
        case id === "naturalBornPowersList":
            var list = listFunction;
            document.getElementById(id).innerText = printFullList(list);
            return;
        case id === "superList" || id ==="proficiencyList" || id ==="positiveList" || id ==="negativeList" || id ==="neutralList":
            var list = generalToList(id);
            document.getElementById(id).innerText = randomLine(list);
            return;
        default:
            var list = listFunction;
            document.getElementById(id).innerText = randomLine(list);
            return;
    }
}
function getPersonalities() {
    let traitList = Array();
    let maxChance = 100;
    for (let i = 0; i < 3; i++) {
        var chance = Math.random() * maxChance;
        switch (true) {
            case chance < 18:
                var newID = "neutralList";
                break;
            case chance < 54:
                var newID = "positiveList";
                break;
            case 53 < chance:
                var newID = "negativeList";
                break;
        }
        var list = generalToList(newID);
        traitList.push(randomLine(list));
    }
    var string = "";
    traitList.forEach(function (element) {
        string += element + " ";
    });
    return string;
}

function getProficiencies(id) {
    let traitList = Array();
    for (let i = 0; i < 3; i++) {
        var list = generalToList(id);
        traitList.push(randomLine(list));
    }
    var string = "";
    traitList.forEach(function (element) {
        string += element + " ";
    });
    return string;
}

function getSuperpowers(character, species, lowChance, highChance,maxChance){
    if(character === "creature"){
        document.getElementById("superList").innerText = "false";
        document.getElementById("superList2").innerText = "false";
        return;
    }
    let hasSuperpowers = false;
    var superChance = Math.random() * maxChance;
    if (superChance > highChance) {
        returnElement(character, species, "superList");
        hasSuperpowers = true;
    }
    else {
        document.getElementById("superList").innerText = "false";
    }
    //superpower2
    if (hasSuperpowers) {
        let superChance2 = Math.random() * maxChance;
        if (superChance2 > lowChance) {
            returnElement(character, species, "superList2");
        }
        else {
            document.getElementById("superList2").innerText = "false";
        }
    }
    else {
        document.getElementById("superList2").innerText = "false";
    }
}
function getMutated(chance,maxChance){
    var mutatedChance = Math.random() * maxChance;
    if (mutatedChance > chance) {
        document.getElementById("mutated").innerText = "true";
    }
    else {
        document.getElementById("mutated").innerText = "false";
    }
}
function getSexuality(character,species,chance,maxChance){
    if(character === "creature"){
        document.getElementById("sexualityList").innerText = "false";
        return;
    }
    var sexualityChance = Math.random() * maxChance;
    if (sexualityChance > chance) {
        document.getElementById("sexualityList").innerText = "Heterosexual";
    }
    else {
        returnElement(character, species, "sexualityList");
    }
}
function getNaturalBornPowers(character, species, highChance,maxChance){
    if(character === "humanoid"){
        document.getElementById("naturalBornPowersList").innerText = "false";
        return;
    }
    var chance = Math.random() * maxChance;
    if (chance > highChance) {
        returnElement(character, species, "naturalBornPowersList");
       
    }
    else {
        document.getElementById("naturalBornPowersList").innerText = "false";
    }
    
}
function getType(character, species){
    if(character === "mythic"){
        document.getElementById("typeList").innerText = "false";
        return;
    }
    returnElement(character, species, "typeList");
}
function getAge(character, species){
    if(character === "creature"){
        document.getElementById("ageRange").innerText = "false";
        return;
    }
    returnElement(character, species, "ageRange");
}
function getPersonality(character, species){
    if(character === "creature"){
        document.getElementById("personality").innerText = "false";
        return;
    }
    returnElement(character, species, "personality");
}
function getIdeology(character, species){
    if(character === "creature"){
        document.getElementById("ideologyList").innerText = "false";
        return;
    }
    returnElement(character, species, "ideologyList");
}

export function newCharacter(character) {
    document.getElementById("CharacterSheet").style.display = "block";
    // let character = "humanoid";
    //sets 100% var
    let maxChance = 100;
    let lowChance = 70;
    let lowerChance = 80;
    let extremelyLowChance = 90;
    //species
    var species = returnSpecies(character, "speciesList");
    //name
    returnElement(character, species, "nameList");
    //type
    getType(character, species);
    //mutated
    getMutated(extremelyLowChance,maxChance);
    //superpower
    getSuperpowers(character, species, lowerChance, lowChance,maxChance);
    //age
    getAge(character,species);
    //sex
    returnElement(character, species, "sexesList");
    //sexualities
    getSexuality(character,species,lowChance,maxChance);
    //skills
    returnElement(character, species, "proficiencyList");
    //personalities
    getPersonality(character, species);
    //ideology
    getIdeology(character, species)
    //origin
    returnElement(character, species, "originLocation");
    //diet
    returnElement(character, species, "diet");
    //element
    returnElement(character, species, "element");
    //threatLevel
    returnElement(character, species, "threatLevel");
    //naturalBornpowersList
    getNaturalBornPowers(character, species, lowChance,maxChance);
}









