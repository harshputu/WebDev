//Print from 1 to 5
/*
for(let i=1;i<=5;i++){
    console.log(i);
}
*/

//Print all odd number from 1 to 15
/*for(let i=1;i<=15;i++)
{
    if(i%2!=0)
    console.log(i);
}

//or 

for(let i=1;i<=15;i=i+2)
{
    console.log(i);
}
*/

//Print all even number from 2 to 10
/*
for(let i=2;i<=10;i=i+2)
{
    console.log(i);
}*/

//Print the multiplication table of 5

/*for(let i=1;i<=10;i++){
    console.log(5*i);
}
*/

//Favourite Movie
/*
let fm="shiddat";
let guess=prompt("Enter You guess or write quit to Quit");
while((fm!=guess) && guess!="quit"){
    console.log("wrong");
    guess=prompt("Enter You guess or write quit to Quit");
}
if(guess==fm){
    console.log("congrats");
}
if(guess=="quit"){
    console.log("You Quit");
}
*/

//for of loop
/*
let fruits=["mango","grapes","Guava"];

for(fruit of fruits){
    console.log(fruit);
}
*/

//Nested for of loop
let fruits=[["mango","grapes","Guava"],
            ["tomato","chilli","Lemon"]];
for(list of fruits){
    console.log(`Value of ${list}`)
    for(fruit of list){
        console.log(fruit);
    }
}
