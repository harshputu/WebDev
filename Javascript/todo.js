let todo=[];
let choice=prompt("Enter your request");
while(true){
    if(choice=="quit"){
        
        console.log("Quitting App")
        break;
    }
    else if(choice=="add"){
        let item=prompt("Enter task to add");
        todo.push(item);
        console.log("Task Added");
    }
    else if(choice=="delete"){
        let item=prompt("Enter index to delete");
        todo.splice(item,1);

    }
    else if(choice=="list"){
        console.log("---------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("---------------");
    }
    
    choice=prompt("Enter your request");
}