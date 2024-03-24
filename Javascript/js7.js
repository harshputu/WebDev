//this keyword

const student={
    name:"harsh",
    eng:99,
    math:33,
    phy:47,
    getAvg(){
        let avg=(this.eng +this.math + this.phy)/3;
        console.log(`${this.name} got avg marks of ${avg}`);
    }
};


//try catch

try{
    console.log(a);
} catch{
    console.log("Error aagya bhai a define kar");
}

//Arrow Function  

const sum=(a,b)=>{
    console.log(a+b);
}
//sum(1,2);

//in case of one argument

const num=n=>{   // n can be written as (n) also
    console.log(n);
}
//num(1);


//implicit return 

const mult=(a,b)=>(
    a*b
);

//setTimeout

// console.log("Hi There");

// setTimeout(()=>{
//     console.log("Harsh's Heaven");
// },4000);

// console.log("welcome to");

// console.log("Hi There");

// setInterval(()=>{
//     console.log("Harsh's Heaven");
// },2000);

// console.log("welcome to");

//This with arow function

const person={
    name:"harsh",
    marks:95,
    prop:this,
    getName: function(){
        console.log(this);
        return this.name;
    }
};

const cube=n=>(n*n*n);

let id=setInterval(()=>{
    console.log("Hello World");
},2000);
setTimeout(()=>{
    clearInterval(id);
    console.log("Clear Interval Ran");
},10000);