//ist create Random Number:
function getRandomNumber(max){
    return Math.floor(Math.random()*max);
}
// create Random color:
function generateRandomColor(){
    let hexcharacters = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","f"];
    let color = "#";
    for(let i =0;i<6;i++){
        let randomNumber = getRandomNumber(16);
        color = color + hexcharacters[randomNumber];
    }
    return color;
}
let parentBox = document.querySelector(".boxes");
// Creating Boxes:
for(let i = 0;i<504; i++){
    let div = document.createElement("div");
    div.classList.add("box");
    let h3 = document.createElement("h3");
    let randomNo = getRandomNumber(504);
    h3.innerText = randomNo;
    div.append(h3);
    parentBox.append(div);
}
//AddEventlistener type of mouse:
let allBoxes = document.querySelectorAll('.box');
function handleMouseMove(){
    allBoxes.forEach((box)=>{
        box.style.backgroundColor = generateRandomColor();
        box.querySelector('h3').innerText = getRandomNumber(504);

    });
}
parentBox.addEventListener("mousemove",handleMouseMove);