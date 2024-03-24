//Q1 Arrow function to return avg of elements of array

let arr=[1,2,3,4,5,6];

let arrayAverage=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    return sum/arr.length;
};

console.log(arrayAverage(arr));

//Q2 A num is even or not

let isEven=n=>(n%2==0);
console.log(isEven(2));

let length=4;
function callback(){
    console.log("I m here");
    console.log(this.length);
}

const object={
    length:5,
    method(callback){
        console.log(callback);
        callback();
    }
};

object.method(callback,1,2);

// const object={
//     message:"Hello, World",
//     logMessage(){
//         console.log(this);
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage,1000);
