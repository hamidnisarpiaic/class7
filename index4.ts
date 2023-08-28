// These two interfaces are completely transferrable in a structural type system:

interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}
  
let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };
  
sphere = ball; // Error, cannot assign a Ball to a Sphere
ball = sphere; // Error, cannot assign a Sphere to a Ball
  
// If we add in a type which structurally contains all of
// the members of Ball and Sphere, then it also can be
// set to be a ball or sphere.
  
interface Tube {
    diameter: number;
    length: number;
}
  
let tube: Tube = { diameter: 12, length: 3 };
  
// tube = ball; // Error, cannot assign a Ball to a Tube
ball = tube; // Error, cannot assign a Tube to a Ball
  
// Because a ball does not have a length, then it cannot be
// assigned to the tube variable. However, all of the members
// of Ball are inside tube, and so it can be assigned.
  
// TypeScript is comparing each member in the type against
// each other to verify their equality.

//===================================================

// Now let's do it Case By Case

// Case when "FRESH" object literals are assigned to a variable 
// Rule: When a fresh object literal is assigned to a variable or passed as a parameter of a non-empty target type, 
// it is an error for the object literal to specify properties that don't exist in the target type.
// The rationale for the below two errors is that since the fresh types of the object literals are 
// never captured in variables, static knowledge of the excess or misspelled properties should not be silently lost. 

let myType = { name: "Zia", id: 1 };

// Case 1
myType = { id: 2, name: "Tom" }; // Corrected: Properties must match the target type

// Case 2a
// myType = { id: 2, name_person: "Tom" }; // Error, renamed or missing property

// Case 2b
// A type can include an index signature to explicitly indicate that excess properties are permitted with fresh objects:
var x: { id: number, [x: string]: any };
x = { id: 1, fullname: "Zia" }; // Ok, `fullname` matched by index signature

// Case 3
// myType = { id: 2, name: "Tom", age: 22 }; // Error, excess property

//=================================================

// Case when STALE object literals are assigned to a variable 

let myType2 = { id: 2, name: "Tom" };

// Case 1
myType = myType2; // Corrected: Properties must match the target type

let myType3 = { id: 2, name_person: "Tom" };
// Case 2a
// myType = myType3; // Error, renamed or missing property

// Case 2b
// A type can include an index signature to explicitly indicate that excess properties are permitted with fresh objects:
var y = { id: 1, fullname: "Zia" };
x = y; // Ok, `fullname` matched by index signature

var myType4 = { id: 2, name: "Tom", age: 22 };

// Case 3
myType = myType4; // Ok, excess property allowed in case of stale object which is different from fresh object
