//Delete all the occurences of num in given array
/*let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);*/

//JS Program to find the no of digits in anumber

/*let n=287152,count=0;
while(n!=0){
    let rem=n%10;
    count++;
    n=Math.floor(n/10);
    console.log(count);
}
console.log(count);*/

//JS Program to do sum of all digit

/*let n=287152,sum=0;
while(n!=0){
    let rem=n%10;
    sum=sum+rem;
    n=Math.floor(n/10);
  
}
console.log(sum);*/

//JS Program to find factorial of n'

/*let n=7, fact=1;
while(n>0){
    if(n==0){
        fact=1;
        break;
    }
    
fact=fact*n;
n--;
}
console.log(fact);*/

//Find the largest number in an array with positive integers
let max=0;
let arr=[3,4,1,2,7,8,9,10,0,12];
for(el of arr){
    if(el>max){
        max=el;
    }
}
console.log(max);