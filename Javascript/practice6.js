//Javascript function that retiurns array ellements larger than a number
let arr=[10,12,4,3,7,8,1];

function eleLarge(arr,num){
for(let i=0;i<arr.length;i++){
    if(arr[i]>num){
        console.log(arr[i]);
    }
}
}

console.log(eleLarge(arr,5));

//Write a Javascript program to extract unique charcter from a string

//str= "abcdabcdefgggh"
//ans="abcdefgh"

let str="abcdabcdefgggh";
function uniqueStr(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        if(ans.indexOf(str[i])==-1){
           ans=ans+str[i];
        }
    }
    console.log(ans);
}

uniqueStr(str);

//Write  a Javscript program to accept the list of copuntry as input and returns the longest country name as output


let country =["India","Afghanistan","United states of america"];

function longestCountry(country){
    let max=0;
    for(let i=1;i<country.length;i++){
        if(country[i].length>country[max].length){
            max=i;
        }
    }
    return country[max];
}

console.log(longestCountry(country));

// Write a function to count no of vowels in a string argument

let vow="hariahreshwar";

function countVowels(str){
    let count =0;
    for(let i =0 ;i<str.length;i++){
        if(
            str[i]=="a" ||
            str[i]=="e" ||
            str[i]=="i" ||
            str[i]=="o" ||
            str[i]=="u"
        ){
            count++;
        }
    }
    return count;
}

console.log(countVowels(vow));

//Write a Javascript function to generate the number with a given range ( Start , end)

function generateNumber(start,end){
    return Math.floor(Math.random()*end)+start;
}
console.log(generateNumber(1,6));

