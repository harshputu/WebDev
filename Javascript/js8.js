//ForEach
let arr=[1,2,3,4,5];


//MEthod 1;
/* let print = function(el){
  console.log(el);
};
arr.forEach(print);*/

// with function within it
/*
arr.forEach(function(el){
  console.log(el);
});*/

//with Arrow function
arr.forEach((el)=>{
  console.log(el);
});

let obj=[{
      name:"harsh",
      mark:78
    },
    {
      name:"chote",
      mark:89
    },
    {
      name:"Sundru",
      mark:90
    }];

obj.forEach((o)=>{
  console.log(o.mark);
});

//Map Function

let double=arr.map((el)=>{
  return el+el;
});
console.log(double);

//to calculate gpa of a student

let cgp=obj.map((ob)=>{
  return ob.mark/10;
});
console.log(cgp);

//Filter

let num=[1,2,3,4,5,6,7,8,9,10];

let even=num.filter((n)=>{
  return (n%2==0);
});
console.log(even);

//every

let evenNum=[2,4,6];

console.log(evenNum.every((en=>{ return en%2==0})));

//REDUCE

let redNum=[1,2,3,4,5,6,7];

let finalValue = redNum.reduce((res,el)=>((res+el)));
console.log(finalValue);

//find the maxium from reduce

let maxArr=[1,2,3,8,9];

let maxNum= maxArr.reduce((max,el)=>{
 // console.log(max);
  if(el>max){
    return el;
  }else{
    return max;
  }
});
console.log(maxNum);

//Practice Question
//Q1: Chcek if all the number in array are multiple of 10 or not

let mulTen=[50,20,30,40,10];

let ans= mulTen.every((el)=>(el%10==0));

console.log(ans);

//Q2: find the minimum in an array

let min=mulTen.reduce((min,el)=>{
  console.log(min);
  if(el>min)
  return min;
  else 
  return el;
});
console.log(min);

let a=[1,2,3,4,5];
let obj1={...arr};
console.log(obj1);