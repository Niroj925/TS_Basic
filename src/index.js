var numbers = []; //array
numbers[0] = 4;
//tuple
var user = [1, "thapa"];
user[1]; //gives all the propertise 
//enum
//pascal cases
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var mySize = Size.Medium;
///return numerc value
console.log("your size", mySize);
