let body=document.querySelector('body');
//Q1
const inputTag=document.createElement('input');
const btn=document.createElement('button');
btn.innerText="Click Me";

body.appendChild(inputTag);
body.appendChild(btn);
//Q2

inputTag.setAttribute('placeholder','username');
btn.setAttribute('id','btn');

//Q3
let btnId=document.querySelector('btn');
btn.style.backgroundColor="blue";
btn.style.color="white";

//Q4

let hOneTag=document.createElement('h1');
hOneTag.innerHTML="<u>DOM Practice</u>";
hOneTag.style.color="purple";

body.appendChild(hOneTag);

//Q5

let ptag=document.createElement('p');
const v="Delta"
ptag.innerHTML=`Apna College <b>${v}</b> Practice`;
body.appendChild(ptag);


