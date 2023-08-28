
interface cars {
    mileage : number,
    model : number,
}

let lexus : cars ={
    mileage: 2000,
    model : 2025
}



function EngineEfficiency(car : cars){
    let calculation = car.mileage * car.model;
    return calculation
}

EngineEfficiency(lexus);

interface Bikes {
    model : number,
    mileage : number
}

let H2r : Bikes={
    mileage : 200,
    model : 2021
}
EngineEfficiency(H2r)

//function Add (num1 : number, num2 : number){
    //return num1 + num2
//}

interface Plane {
    mileage : number,
    model : number,
    speed : number
}

let Jf17 : Plane ={
    mileage : 500,
    model : 2017,
    speed : 500
}

EngineEfficiency (Jf17)

//lexus = Jf17
//Jf17 = Lexus  // Not compatible because Jf17 have speed which is not available in Lexus. Left side is compared with right.

interface Bus {
    model : number,
    engine_mileage : number
}

let busObj : Bus ={
    model : 2021,
    engine_mileage : 1500
    mileage : "TOO much"
}

EngineEfficiency(busObj)

// compare 
//variable structure
//property type
//property name 

let BMW = {model: 2030, mileage: 2000, color: "Black"}
lexus = {model: 2030, mileage:2000}//fresh and stale object. To see right side of equal.
lexus = BMW //stale object 


