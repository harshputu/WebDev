let btns = document.querySelectorAll("button");

// console.dir(btn);

// btn.onclick = function(){
//     console.log("Clicked");
// };
// btn.onmouseenter = function(){
//     console.log("You Entered the Button");
// };

for(btn of btns){
    btn.addEventListener("click",function(){
        alert("You Clicked me");
    });
    btn.addEventListener("click",function(){
        alert("harsh");
    });
}
