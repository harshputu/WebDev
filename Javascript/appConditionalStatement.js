console.log("Harsh is Gonna be king of JS");
//Datatypes
console.log(typeof(5)); //number
console.log(typeof(true)); //Boolean
console.log(typeof("Hey JS")); //String
let num=null;
console.log(typeof num);  //Null 
console.log(typeof(undefined)); //Undefined


//If-Else

console.log("If else Statement");

let age=23;
if(age>=18){
    console.log("You Can Vote");
}
console.log("After my if statement");


//Practice question traffic light 

console.log("Practice Question Traffic Light");
let color="green";
if(color=="red")
{
    console.log(`Stop. Light Color is ${color}`);
}
else if(color=="yellow")
{
    console.log(`Slow Down. Light Color is ${color}`);
}
else if(color=="green")
{
    console.log(`Go. Light Color is ${color}`);
}
else
{
    console.log("Traffic Light is Broken");
}


//Practice Question Popocorn

console.log("Practice Question Popcorn");
let size="XL";
if (size==="XL"){
    console.log("Price is 250");
}
else if(size==="L"){
    console.log("Price is 200");
}
else if(size==="M"){
    console.log("Price is 100");
}
else if(size==="S"){
    console.log("Price is 50");
}
else{
    console.log("invalid input");
}


// Practice Question
//A "Good String" is a string that starts with the letter 'a' & has a length > 3. Write a program to find if a
// string is good or not

console.log("Good String Question");
let a="am";

if(a[0]==='a' && a.length>3){
    console.log("Good String");
}
else{
    console.log("Bad String");
}

//Practice Question
// Use switch statemtn to print the day of the week using a number varibale 'day' with values 1 to 7;

console.log("Practice question Switch statement se week")

let day=1;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;   
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break; 
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Input");
}

//Alert and prompt

// console.log("Alert and Prompt");

// alert("Hey Welcome");

// let firstName=prompt("Enter Your First Name:");

// console.log(firstName);

// let lastName=prompt("Enter Your Last Name:");

// console.log(`Welcome ${firstName} ${lastName} !!!`);


//Practice Questions:

//q1

let number=500;
if(num%10===0){
    alert("Good")
}
else{
    alert("bad");
}

//q2

/* let uName=prompt("Enter Your Name");
let uAge= prompt("Enter Your Age");
alert(`${uName} is ${uAge} years old.`); */

//q3

let monthNum=1;
switch(monthNum){
    case 1: alert("January, February, March");
            break;
    case 2: alert("April, May, June");
            break;
    case 3: alert("July, August, September")
            break;
    case 4: alert("October, November, December");
            break;
    default:alert("Invalid");
}

//q4

let gStr="aluminium";
if(((gStr[0]==='A')||(gStr[0]==='a')) && gStr.length >5){
    console.log("Golden");
}
else{
    console.log("Not Golden");
}

//q5
 let one=3,two=5,three=1;

 if(one>two && one > three){
    console.log(one);
 }
 else if(two>one && two > three){
    console.log(two);
 }
 else if(three>one && three>two){
    console.log(three);
 }

 //q6

 let num1=32 , num2=4785;
 if(num1%10 === num2%10){
    console.log("Yes the have the same last digit");
 }
 else{
    console.log("No They dont have the same last digit");
 }
 