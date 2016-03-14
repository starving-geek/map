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

function numberListGenerator() {
  var numOfElements = getNumOfElements();
  var list = [];
  for (var i = 0; i < numOfElements; i++) {
    list[i] = getRandomInt(0, 10);
  }
  return list;
}

// The function creates a list of lists.
function doubleListGenerator() {
  // these sublists should be no longer than 3 elements
  // must compensate for this specification
  var list1 = numberListGenerator();
  var list2 = numberListGenerator();
  var list3 = numberListGenerator();

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

function getMathAnswer(list, operator, ) {

}

function getNullAnswer() {

}

function getMathOperator() {
  var operator = "";
  var operatorType= getRandomInt(1, 3);
  if (operatorType === 1) {
    operator = "+";
  } else {
    operator = "*";
  }

  return operator;
}

MapModel.prototype.MapProblem = function() {
    this.mapString = "fun map (f,xs) =\n";
    this.mapString += "     case xs of\n";
    this.mapString += "         [] => []\n";
    this.mapString += "     | first::rest => (f first)::(map(f, rest))\n";
}

MapModel.prototype.getMapExpression = function() {
    return this.mapString;
}