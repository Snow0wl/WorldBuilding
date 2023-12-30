import humanoidCharacterStats from './humanoid.json' assert { type: 'json' };
import HumanoidSpecies from './humanoidSpeciesList.json' assert { type: 'json' };
import generalCharacterStats from './generalCharacterStats.json' assert { type: 'json' };

function humanoidToList(species) {
    var options = HumanoidSpecies[species];
    console.log(options);
    return options;
}

function returnSpecies(character, species) {
    switch (true) {
        case character == "humanoid":
            var listFunction = humanoidToList(species);
        // case character == "mystic":
        //     var listFunction = humanoidToList(id);
        // case character == "alien":
        //     var listFunction = humanoidToList(id);
        // case character == "creature":
        //     var listFunction = humanoidToList(id);
    }
    var list = listFunction;
    var species = randomLine(list);
    document.getElementById("speciesList").innerText = species;
    return species;
}

function humanoidSpeciesToList(species,id) {
    var options = humanoidCharacterStats.humanoid[species][id];
    return options;
}

function generalToList(id) {
    switch (true) {
        case id == "superList":
            var options = generalCharacterStats[id];
            break;
        case id == "proficiencyList":
            var options = generalCharacterStats[id];
            break;
        case id == "positiveList":
            var options = generalCharacterStats["personality"][id];
            break;
        case id == "negativeList":
            var options = generalCharacterStats["personality"][id];
            break;
        case id == "neutralList":
            var options = generalCharacterStats["personality"][id];
            break;
    }
    return options;
}

function randomLine(list) {

    var element = Math.floor(Math.random() * list.length);
    return list[element];
}
function returnElement(character, species, id) {
    switch (true) {
        case character == "humanoid":
            var listFunction = humanoidSpeciesToList(species,id);
        case character == "mystic":
            var listFunction = humanoidSpeciesToList(species,id);
        case character == "alien":
            var listFunction = humanoidSpeciesToList(species,id);
        case character == "creature":
            var listFunction = humanoidSpeciesToList(species,id);
    }
    if (id === "personality") {
        document.getElementById(id).innerText = getPersonality();
        return;
    }
    if (id === "proficiencyList") {
        document.getElementById(id).innerText = getProficiencies(id);
        return;
    }
    if (id === "ageRange") {
        var list = listFunction;
        var age = Math.floor(Math.random() * list);
        document.getElementById(id).innerText = age;
        return age;
    }
    if (id === "superList2") {
        var newID = id.substring(0, id.length - 1);
        var list = generalToList(newID);
        document.getElementById(id).innerText = randomLine(list);
        return;
    }
    if (id === ("superList" || "proficiencyList" || "positiveList" || "negativeList" || "neutralList")) {
        var list = generalToList(id);
        document.getElementById(id).innerText = randomLine(list);
    }

    else {
        var list = listFunction;

        document.getElementById(id).innerText = randomLine(list);
    }
}
function getPersonality() {
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

export function newHumanoidCharacter() {
    document.getElementById("CharacterSheet").style.display = "block";
    let character = "humanoid";
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
    returnElement(character, species, "typeList");
    //mutated
    var mutatedChance = Math.random() * maxChance;
    if (mutatedChance > extremelyLowChance) {
        document.getElementById("mutated").innerText = "true";
    }
    else {
        document.getElementById("mutated").innerText = "false";
    }
    //superpower
    let hasSuperpowers = false;
    var superChance = Math.random() * maxChance;
    if (superChance > lowChance) {
        returnElement(character, species, "superList");
        hasSuperpowers = true;
    }
    else {
        document.getElementById("superList").innerText = "false";
    }
    //superpower2
    if (hasSuperpowers) {
        let superChance2 = Math.random() * maxChance;
        if (superChance2 > lowerChance) {
            returnElement(character, species, "superList2");
        }
        else {
            document.getElementById("superList2").innerText = "false";
        }
    }
    else {
        document.getElementById("superList2").innerText = "false";
    }
    //age
    document.getElementById("sexualityList").innerText = returnElement(character, species, "ageRange");
    //sex
    returnElement(character, species, "sexesList");
    //sexualities
    var sexualityChance = Math.random() * maxChance;
    if (sexualityChance > lowChance) {
        document.getElementById("sexualityList").innerText = "Heterosexual";
    }
    else {
        returnElement(character, species, "sexualityList");
    }
    //skills
    returnElement(character, species, "proficiencyList");
    //personalities
    returnElement(character, species, "personality");
    //ideology
    returnElement(character, species, "ideologyList");
    
}









