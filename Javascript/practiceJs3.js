let arr=[7,9,0,-2];
let n=3;
let newArr=arr.slice(0,n);
console.log(newArr);
let fromback=arr.slice(-3);
console.log(fromback);

//Q3 string blank or not
let uName=prompt("Enter Your Name")
console.log(uName);
if(uName,length==0) 
console.log("blank");
else
console.log("Not Blank");

//check if given character is lowercase
let check= prompt("Enter the charcter to check");
if(check==check.toLowerCase()){
    console.log("It is a Lowercase character");
}else{
    console.log("It is an Uppercase character");
}

//program to strip leading or trailing zeros from a string
let str= prompt("Enter the String");
console.log(`Original String : ${str}`);
console.log(`After String : ${str.trim()}`);

//Write a JavaScript program to check if an element exists in an array or not.
let eleArr=[2,5,6,7,-64];
let checkEle=5
console.log(eleArr.indexOf(checkEle));
if(eleArr.indexOf(checkEle)!=-1){
    console.log(" Exist");
}
else{
    console.log("Not Exists");

    
}
