let students=["harsh","sinha","ram"];


//creating array
let marks=[23,45,67,8,9];  //array with number datatype

let names=["adam","bob","rob","harsh"];   //array with string datatype

let info=["harsh",23,5.11];      //Array with mix of datatypes

let newArr=[];      //Empty Array

// Array is mutable

let fruit=["apple","mango","litchi"];

fruit[0]="banana";

fruit[10]="papaaya";

//Array Methods

let cars=["audi","bmw","maruti","mahindra"];
/*
    push -> adds to end
    pop -> deletes from end and returns it
    unshift -> add to start
    shift -> delete from start and returns it
 */


    //Practice Question 1
console.log("Practice Question 1");
let month=["january","july","march","august"];
month.shift();
month.shift();
month.unshift("june");
month.unshift("july");

console.log(month);


//Practice Questions

//Q1
console.log("Question 1 from Splice");
let monthArr=["january","july","march","august"];
monthArr.splice(0,1);
console.log(monthArr);
monthArr.splice(0,0,"june");
//or

//monthArr.splice(0,1).splice(0,0,"june");

//or

// monthArr.splice(0,2,"july","june");

console.log(monthArr);


//Q2
console.log("Question 2 from reverse");

let lang=["c","c++","html","javascript","python","java","c#","sql"];

console.log(lang.reverse().indexOf("javascript"));

