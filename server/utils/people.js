// API Starts here
import axios from "axios";
var url = "https://api.dandelion.eu/datatxt/sim/v1";

async function getSimilarity(text1, text2) {
  var plusText1 = text1.replace(/\s/g, "+");
  var plusText2 = text2.replace(/\s/g, "+");
  url +=
    "?text1=" +
    plusText1 +
    "&text2=" +
    plusText2 +
    "&lang=en" +
    "&token=c8a3cb3ba95d4a2094179673eb720550";

  axios.get(url).then(
    (response) => {
      //console.log(response.data.similarity);
      return response.data.similarity;
    },
    (error) => {
      //console.log(error);
      return error;
    }
  );
}

class Person{
  constructor(id, name, input){
      this.id = id;
      this.input = input;
      this.username = name;
      this.match = null;
  }
}

// Server people functions start here
function matchUserFeelings(sadUsers, sadIndiv){
  bestMatch = null;
  bestVal = -1;
  for(var i = 1; i < sadUsers.length; i++){
      if(bestVal < getSimilarity(sadIndiv.input, sadUsers[i].input)){
          if(!sadUsers[i].match){
              bestVal = getSimilarity(sadIndiv.input, sadUsers[i].input);
              bestMatch = sadUsers[i]; 
          }
      }
  }
  const index = sadUsers.getIndex(bestMatch);
  if(index > -1){
      sadUsers.splice(index, 1);
  }
  if(bestMatch){
    sadIndiv.match = bestMatch;
  }
}

function matchUserCasual(casualUsers, casIndiv){
  bestMatch = NULL;
  bestVal = -1;
  for(var i = 1; i < casualUsers.length; i++){
      if(bestVal < getSimilarity(casIndiv.input, casualUsers[i].input)){
        if(!casualUsers[i].match){
          bestVal = getSimilarity(casIndiv.input, casualUsers[i].input);
          bestMatch = casualUsers[i]; 
        }
      }
  }
  const index = casualUsers.getIndex(bestMatch);
  if(index > -1){
      casuaUsers.splice(index, 1);
  }
  if(bestMatch){
    casIndiv.match = bestMatch;
  }
}

function matchUsers(sadUsers, casualUsers){ // both are lists of person objects
  while(sadUsers.length > 0){
      var i = 0;
      matchUserFeelings(sadUsers, sadUsers[i]);
      const index = sadUsers.getIndex(sadUser[i]);
      if (index > -1 && sadUsers[i].match){
          sadUsers.splice(index, 1);
          i++;
      }
  }
  while(casualUsers.length > 0){
      var i = 0;
      matchUserCasual(casualUsers, casualUsers[i]);
      const index = casualUsers.getIndex(casualUsers[i]);
      if (index > -1 && casualUsers.match){
          casualUsers.splice(index, 1);
          i++;
      }
  }

}

module.exports = {
  Person, 
  matchUserFeelings, 
  matchUserCasual, 
  matchUsers
}