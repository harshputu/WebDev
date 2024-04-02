let body=document.querySelector('body');
//P tag
let pTag=document.createElement('p');
pTag.innerHTML="Hey! I am Red";
pTag.style.color="red";
body.appendChild(pTag);

//h3
let h3=document.createElement('h3');
h3.innerHTML="Hey! I am a blue h3";
h3.style.color="blue";
body.appendChild(h3);

// div with black border and pink backgroundColor with the following element inside of it

let div=document.createElement('div');
div.style.border="2px solid black";
div.style.backgroundColor="pink";
body.appendChild(div);

let h1=document.createElement('h1');
h1.innerHTML="Hey! I in a div";
div.appendChild(h1);

let p2=document.createElement('p');
p2.innerHTML="ME TOO!";
div.appendChild(p2);