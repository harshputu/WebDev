//function to print poem

function printPoem(){
    console.log("Twinkle twinkle little star");
    console.log("How I wonder what you are");
    console.log("up above the sky so high");
    console.log("Like a diamond in the sky");
}

// to get the numbe betwween 1 and 6
function dice(){
    console.log(Math.floor(Math.random()*6)+1);
    }
    
//Program to print average of three numbers

function calAvg(a,b,c){
    console.log((a+b+c)/3);
}

//to print multiplication table of any number

function MulTable(n){
    for(let i=1;i<=10;i++){
        console.log(n*i);
    }
}

//To print sum of 1 to n

function sumN(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}

// to concatenate all the string in an Array and return the string after concatenation

let arr=["Hey"," How"," Are"," You"];

function conStr(str){
    let result="";    
    for(st of str){
        result += st;
    }
    return result;
}

//function expression
let sum=function(a,b){
    return a+b;

}

console.log(sum(1,2));
//console.log(conStr(arr));

//console.log(sumN(5));

//MulTable(5);

//calAvg(5,6,7);

//dice();

//printPoem();