
async function loadFile(filePath) {
    // var result = null;
    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.open("GET", filePath, false);
    // xmlhttp.send();
    // if (xmlhttp.status==200) {
    //   result = xmlhttp.responseText;
    // }
    // return result;
    // // const reader = new FileReader();
    // // if (input) {
    // //   return reader.readAsText(input);
    // // }
    const masterList = await fetch(filePath);
      return masterList.json();;

  }
  var hello;
  async function unWrap(filePath){
    let result = await loadFile(filePath);
    // console.log(result);
   
    // return result;
  }

  function randomLine(string){
    var fullFile = unWrap(string);
    // console.log(fullFile);
    // var lines = fullFile.split('\n');
    // var line = Math.floor(Math.random() * lines.length);
    // return lines[line];
  }

  function newHumanoidCharacter(){
    
    document.getElementById("CharacterSheet").style.display="block";
    //sets 100% var
    let maxChance = 100;
    let lowChance = 70;
    let lowerChance = 80;
    let extremelyLowChance = 90;
    //name
    unWrap("files/characterCreationFiles/catagories/humanoid/names.json");
    var text = hello;
   
    console.log(text);
    // document.getElementById("name").innerText = randomLine("files/characterCreationFiles/catagories/humanoid/names.txt");
    // //type
    // document.getElementById("type").innerText = randomLine("files/characterCreationFiles/catagories/humanoid/types.txt");
    // //mutated
    // var mutatedChance = Math.random() * maxChance;
    // if(mutatedChance>extremelyLowChance)
    // {
    //     document.getElementById("mutated").innerText = "true";
    // }
    // else{
    //   document.getElementById("mutated").innerText = "false";
    // }
    // //superpower
    // let hasSuperpowers = false;
    // var superChance = Math.random() * maxChance;
    // if(superChance>lowerChance){
    //   document.getElementById("superpowers").innerText = randomLine("files/characterCreationFiles/superpowers.txt");
    //   hasSuperpowers = true;
    // }
    // //superpower2
    // if(hasSuperpowers){
    //   superChance2 = Math.random() * maxChance;
    //   if(superChance2>lowerChance){
    //     document.getElementById("superpower2").innerText = randomLine("files/characterCreationFiles/superpowers.txt");
    //   }
    // }
    // //age
    // document.getElementById("age").innerText = Math.random() * Number(loadFile("files/characterCreationFiles/catagories/humanoid/ageRange.txt"));
    // //sex
    // document.getElementById("sex").innerText = randomLine("files/characterCreationFiles/catagories/humanoid/sexes.txt");
    // //sexualities
    // var sexualityChance = Math.random() * maxChance;
    // if(sexualityChance>lowChance){
    //   document.getElementById("sex").innerText = "Heterosexual";
    // }
    // else{
    //   document.getElementById("sexuality").innerText = randomLine("files/characterCreationFiles/catagories/humanoid/sexualities.txt");
    // }
    // //skills
    // document.getElementById("experiances").innerText = newSetOfThreeElements(newExperiance(),newExperiance(),newExperiance());
    // //personalities
    // document.getElementById("personalities").innerText = newSetOfThreeElements(newPersonality(),newPersonality(),newPersonality());
    // //ideologies
    // document.getElementById("ideologies").innerText = randomLine("files/characterCreationFiles/catagories/humanoid/ideologies.txt");
  }

  function newSetOfThreeElements(elementOne,elementTwo,elementThree){
    let traitList = Array();
    traitList.push(elementOne);
    traitList.push(elementTwo);
    traitList.push(elementThree);
    var string = "";
    traitList.forEach(function(element){
        string += element;
    });
    return string;
  }

  function newExperiance(){
    let maxChance = 100;
    var chance = Math.random() * maxChance;
    if(chance>30){
      return randomLine("files/characterCreationFiles/experiance.txt")
    }
    else{
      return "empty\n";
    }
  }

  function newPersonality(){
    let maxChance = 100;
    var chance = Math.random() * maxChance;
    switch(true){
      case chance<18:
        var path = "files/characterCreationFiles/personalityTraits/Neutral.txt";
        break;
      case chance<54:
        var path = "files/characterCreationFiles/personalityTraits/Positive.txt";
        break;
      case 53<chance:
        var path = "files/characterCreationFiles/personalityTraits/Negative.txt";
        break;
    }
      return randomLine(path);
  }

  

  