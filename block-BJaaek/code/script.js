

let boxOne = document.querySelector(".first");
let boxTwo = document.querySelector(".second");

//we have to create first generate random color;
function generateRandomColor(){
     let hexcharacters = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
     let color = "#";
     for(let i=0;i<6;i++){
         let randomNumber = Math.floor(Math.random()*16);
         color = color + hexcharacters[randomNumber];
     }
     return color;
}
function handleclick(){
    let randomColor = generateRandomColor();
    boxOne.style.backgroundColor = randomColor;
}
boxOne.addEventListener("click",handleclick);


function handleMouseMove(){
    let randomColor = generateRandomColor();
    boxTwo.style.backgroundColor = randomColor;
}
boxTwo.addEventListener("click",handleMouseMove);