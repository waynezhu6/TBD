class person{
    constructor(id, name, input){
        this.id = id;
        this.input = input;
        this.username = name;
        this.match = NULL;
    }
}

function matchUserFeelings(sadUsers, sadIndiv){
    bestMatch = NULL;
    bestVal = -1;
    for(var i = 1; i < sadUsers.length; i++){
        if(bestVal < getSimilarity(sadIndiv.input, sadUsers[i].input)){
            bestVal = getSimilarity(sadIndiv.input, sadUsers[i].input);
            bestMatch = sadUsers[i]; 
        }
    }
    const index = sadUsers.getIndex(bestMatch);
    if(index > -1){
        sadUsers.splice(index, 1);
    }
    sadIndiv.match = bestMatch;
}

function matchUserCasual(casualUsers, casIndiv){
    bestMatch = NULL;
    bestVal = -1;
    for(var i = 1; i < casualUsers.length; i++){
        if(bestVal < getSimilarity(casIndiv.input, casualUsers[i].input)){
            bestVal = getSimilarity(casIndiv.input, casualUsers[i].input);
            bestMatch = casualUsers[i]; 
        }
    }
    const index = casualUsers.getIndex(bestMatch);
    if(index > -1){
        casuaUsers.splice(index, 1);
    }
    casIndiv.match = bestMatch;
}

function matchUsers(sadUsers, casualUsers){ // both are lists of person objects
    while(sadUsers.length > 0){
        var i = 0;
        matchUserFeelings(sadUsers, sadUsers[i]);
        const index = sadUsers.getIndex(sadUser[i]);
        if (index > -1){
            sadUsers.splice(index, 1);
        }
        i++;
    }
    while(casualUsers.length > 0){
        var i = 0;
        matchUserCasual(casualUsers, casualUsers[i]);
        const index = casualUsers.getIndex(casualUsers[i]);
        if (index > -1){
            casualUsers.splice(index, 1);
        }
        i++;
    }

}

module.exports = {
    person, 
    matchUserFeelings, 
    matchUserCasual, 
    matchUsers
}