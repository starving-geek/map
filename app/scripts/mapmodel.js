/*
 * Tyler Deans
 * March 14, 2016
 */



function MapModel(_simModel) {
    // save a link to the model
    this.simModel = _simModel;
}

function getQuestionType() {
    var randNum = getRandomInt(1, 5);
    var type = "";
    if (randNum === 1) {
        type = "arithmetic";
    } else if (randNum === 2) {
        type = "string";
    } else if (randNum === 3) {
        type = "head";
    } else {
        type = "null";
    }

    return type;
}

function getNumOfElements() {
    // generate a number between 3 and 9
    return getRandomInt(3, 10);
}

// generates a list of numbers
// the length of the list is based on the numElements parameter
function numberListGenerator(numElements) {
    var list = [];
    for (var i = 0; i < numElements; i++) {
        list[i] = getRandomInt(0, 10);
    }
    return list;
}

// The function creates a list of lists.
function doubleListGenerator() {
    var numOfElements = getRandomInt(1, 4);
    // each list is no longer that 3 elements
    var list1 = numberListGenerator(numOfElements);
    var list2 = numberListGenerator(numOfElements);
    var list3 = numberListGenerator(numOfElements);

    // creates a list of lists
    var list = [list1, list2, list3];
    return list;

}

function getRandomString(strList) {
    var index = getRandomInt(0, strList.length);
    return strList[index];
}

/*
 * The string list generator is similar to the number list generator
 * Except that the elements come from a large list of strings
 * The string from that list is picked randomly (index is randomly chosen)
 * Then the string is appended to the list
 *
 * A method to determine the question type (number or string)
 * returns a string (number or string)
 *
 */
function stringListGenerator() {
    var numOfElements = getNumOfElements();
    var stringList = ["soup", "dog", "orange", "park", "cat", "helps", "talks", "castle", "genius", "flaming"];
    var list = [];
    for (var i = 0; i < numOfElements; i++) {
        list[i] = getRandomString(stringList);
    }
    return list;
}

function getMathAnswer(operator, list, yVal) {
    if (operator === "+") {
        for (var i = 0; i < list.length; i++) {
            list[i] = list[i] + yVal;
        }
    } else {
        for (var i = 0; i < list.length; i++) {
            list[i] = list[i] * yVal;
        }
    }
}

function getStringAnswer(list) {
    var stringSizeList = [];
    for (var i = 0; i < list.length; i++) {
        stringSizeList = list[i].length;
    }

    return stringSizeList;

}

function getAddOperand() {
    // returns a value between 1 and 3
    return getRandomInt(1, 4);
}

function getMultiplyOperand() {
    // returns a value between 2 and 5
    return getRandomInt(2, 6);
}

function getNullAnswer(list) {
    for (var i = 0; i < list.length; i++) {
        var listStr = list[i].toString();
        if (list[i] === "[]") {
            return true;
        }
    }

    return false;
}

function getHeadOfList(list) {
    return list[0];
}

function getMathOperator() {
    var operator = "";
    var operatorType = getRandomInt(1, 3);
    if (operatorType === 1) {
        operator = "+";
    } else {
        operator = "*";
    }

    return operator;
}

MapModel.prototype.evalMapExpression = function() {
    this.mapString = "fun map (f,xs) =\n";
    this.mapString += "     case xs of\n";
    this.mapString += "         [] => []\n";
    this.mapString += "     | first::rest => (f first)::(map(f, rest))\n";

    var question = getQuestionType();
    if (question === "arithmetic") {

    } else if (question === "string") {

    } else if (question === "head") {

    } else {

    }
}

MapModel.prototype.getMapExpression = function() {
    return this.mapString;
}