import humanoid from './humanoid.json' assert { type: 'json' };
import generalCharacterStats from './generalCharacterStats.json' assert { type: 'json' };



function randomLine(id) {
    switch (true) {
        case id == "name":
            var options = humanoid.nameList;
            break;
        case id == "type":
            var options = humanoid.typeList;
            break;
        case id == "superpowers":
            var options = generalCharacterStats.superList;
            break;
        case id == "superpower2":
            var options = generalCharacterStats.superList;
            break;
        case id == "age":
            var options = humanoid.ageRange;
            return Math.floor(Math.random() * options);
        case id == "sex":
            var options = humanoid.sexesList;
            break;
        case id == "sexuality":
            var options = humanoid.sexualityList;
            break;
        case id == "experiance":
            var options = generalCharacterStats.proficiencies;
            break;
        case id == "positive":
            var options = generalCharacterStats.personality.positiveList;
            break;
        case id == "negative":
            var options = generalCharacterStats.personality.negativeList;
            break;
        case id == "neutral":
            var options = generalCharacterStats.personality.neutralList;
            break;
        case id == "ideology":
            var options = humanoid.ideologyList;
            break;
    }
    var element = Math.floor(Math.random() * options.length);
    return options[element];
}
export function returnElement(id){
    if(id === "personality"){
        let traitList = Array();
        let maxChance = 100;
        for(let i=0;i<3;i++){
            var chance = Math.random() * maxChance;
            switch (true) {
                case chance < 18:
                    var newID = "neutral";
                    break;
                case chance < 54:
                    var newID = "positive";
                    break;
                case 53 < chance:
                    var newID = "negative";
                    break;
            }
            traitList.push(randomLine(newID));
        }
        var string = "";
        traitList.forEach(function (element) {
            string += element + " ";
        });
        document.getElementById(id).innerText = string;
        return;
    }
    if(id === "experiance"){
        let traitList = Array();
        for(let i=0;i<3;i++){
            traitList.push(randomLine(id));
        }
        var string = "";
        traitList.forEach(function (element) {
            string += element +" ";
        });
        document.getElementById(id).innerText = string;
        return;
    }
    else{
        document.getElementById(id).innerText = randomLine(id);
    }
}    




function newSetOfThreeElements(elementOne, elementTwo, elementThree) {
    let traitList = Array();
    traitList.push(elementOne);
    traitList.push(elementTwo);
    traitList.push(elementThree);
    var string = "";
    traitList.forEach(function (element) {
        string += element;
    });
    return string;
}

function newExperiance() {
    let maxChance = 100;
    var chance = Math.random() * maxChance;
    if (chance > 30) {
        return randomLine("files/characterCreationFiles/experiance.txt")
    }
    else {
        return "empty\n";
    }
}

function newPersonality() {
    let maxChance = 100;
    var chance = Math.random() * maxChance;
    switch (true) {
        case chance < 18:
            var path = "files/characterCreationFiles/personalityTraits/Neutral.txt";
            break;
        case chance < 54:
            var path = "files/characterCreationFiles/personalityTraits/Positive.txt";
            break;
        case 53 < chance:
            var path = "files/characterCreationFiles/personalityTraits/Negative.txt";
            break;
    }
    return randomLine(path);
}



