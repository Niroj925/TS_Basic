let numbers:number[]=[];//array
numbers[0]=4;

//tuple
let user: [number,string]=[1,"thapa"];
user[1] //gives all the propertise 


//enum

//pascal cases
enum Size {Small=1,Medium, Large};

let mySize: Size=Size.Medium;
///return numerc value
console.log("your size",mySize);


//function 

function calculateTax(income:number,taxYear=2022):number {
//    let x; //unsused value is true
    if(taxYear <2022)
    return income*1.1;

    return income *1.2
}