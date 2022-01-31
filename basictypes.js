//Create a typescript which determines the use of types.
//Basic types are described on the following web page: (http://www.typescriptlang.org/docs/handbook/basic-types.html)
//For each type described on this page, implement an example. 
//You can do this by defining a set of variables, use let instead of var for declaration and set the type for each of these variables.
//For each of the variables declared, assign a value to it and output to the screen
//Solution
//boolean
var flag = true;
console.log("Value assigned to flag is:" + flag);
//number
var num1 = 6;
console.log("Value assigned to num1 is: " + num1);
//string
var color = "blue";
console.log("Value assigned to color is:" + color);
//array
var list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
    console.log("Number" + (i + 1) + "is: " + list[i] + " .");
}
//tuple
var x;
x = ["hello", 10];
console.log("Tuple example:" + x[0].substring(1));
//enum 
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
var c = Color.Green;
console.log("Enum: Value of colorName is:  " + colorName);
console.log("Enum: Value of c is:  " + c);
console.log("Enum: Name of c is:  " + Color[c]);
//any
var notSure = 4;
notSure = "maybe a string instead";
console.log("Value is a string is:  " + notSure + " .");
notSure = false;
console.log("now Value is a boolean :  " + notSure + " .");
//any array 
var listany = [1, true, "free"];
for (var i = 0; i < listany.length; i++) {
    console.log("Before: Entry " + (i + 1) + " is:" + listany[i] + " .");
}
listany[1] = 100;
for (var i = 0; i < listany.length; i++) {
    console.log("After: Entry" + (i + 1) + "is:  " + listany[i] + " .");
}
