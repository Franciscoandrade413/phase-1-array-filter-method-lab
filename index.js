// Code your solution here
function findMatching(nameArray, stringArg){
    return nameArray.filter(function(person) {
        return person.toUpperCase() === stringArg.toUpperCase();
    })
}

function fuzzyMatch(nameArray, stringArg){
    return nameArray.filter(function(person) {
        return person.toLowerCase().indexOf(stringArg.toLowerCase()) == 0
    })
}

function matchName(nameArray, stringArg){
    return nameArray.filter(function(person){
        return person.name === stringArg
    })
}