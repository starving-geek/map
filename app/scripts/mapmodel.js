/*
 * Tyler Deans
 * February 21, 2016
 */



function MapModel(_simModel) {
    // save a link to the model
    this.simModel = _simModel;
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