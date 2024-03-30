//Q1

let arr=[1,2,3,4];

let sq=arr.map((el)=>(el*el));

console.log(sq);

let sum=arr.reduce((res,el)=>(res+el));

console.log(sum);

let avg = sum/arr.length;

console.log(avg);

//Q2

let newFive=arr.map((el)=>(el+5));
console.log(newFive);

//Q3
let str=["ram","shyan","balram"]
let smallArr=str.map((el)=>(el.toUpperCase()));

console.log(smallArr);

//Q4

function doubleAndReturnArgs(arr,...args){

    return [...arr,...args.map((el)=>(el*2))];
}

console.log(doubleAndReturnArgs([1,2,3,4],1,2,3,4,5,6));

const obj1={
    name:"harsh",
    class:4
};
const obj2={
    fame:"chota",
    glass:4  
};

const mergeObj=(obj1,obj2)=>({...obj1,...obj2});
console.log(mergeObj(obj1,obj2));