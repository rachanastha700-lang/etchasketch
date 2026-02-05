const container = document.querySelector(".container");
const button = document.querySelector(".btn");
const color = document.querySelector(".color");
const clear = document.querySelector(".clear");
const eraser = document.querySelector(".erase");
const select = document.querySelector("select");
let currenttool = "rainbow";
//every time click here
let isdragging = false;

document.addEventListener("mousedown",()=>{
isdragging = true;
});
document.addEventListener("mouseup",()=>{
isdragging = false;
});


color.addEventListener("click",()=>{
    currenttool = "rainbow";
    });
select.addEventListener("change",function(e){
    currenttool = e.target.value;
});  
eraser.addEventListener("click",()=>{
    currenttool = "erase";
    });
clear.addEventListener("click",()=>{
        container.innerHTML ="";
    });

//the grid button --
button.addEventListener("click",()=>{

let n = document.createElement("input");
n = Number(prompt("set number of squares per side recommended-<100: "));

container.innerHTML = "";
//looping statement for divs
for(let i=n;i>=1;i--)
{
    for(let j=n;j>=1;j--)
    {
const div = document.createElement("div");
div.classList.add("divdes");
container.appendChild(div);  // div squares are children of container

div.style.width = `${100/n}%`;
div.style.height = `${100/n}%`;

//for color down
 let num = 0.1;
 //rainbow color button
 
div.addEventListener("mouseover",function(e){
    if(!isdragging)return ; //if true-->false then returns not going down
   if(currenttool === "rainbow"){
e.target.style.backgroundColor = getrandomcolor();
   let brd =e.target.style.backgroundColor;
    e.target.style.border =`0.5px solid ${brd}`;
        e.target.style.opacity = `${num}`;
        num = num+0.1;
   }
   else if(currenttool === "CBP"){
    e.target.style.backgroundColor = "#F7ADC3";
    let pink = e.target.style.backgroundColor;
    e.target.style.border =`0.5px solid ${pink}`;
    e.target.style.opacity = 1;
   }
   else if(currenttool === "FT"){
    e.target.style.backgroundColor = "#FCC5D9";
    let pink = e.target.style.backgroundColor;
    e.target.style.border =`0.5px solid ${pink}`;
    e.target.style.opacity = 1;
   }
   else if (currenttool === "MM"){
    e.target.style.backgroundColor = "#FADDE3";
    let pink = e.target.style.backgroundColor;
    e.target.style.border =`0.5px solid ${pink}`;
    e.target.style.opacity = 1;
   }
   else if(currenttool === "FW"){
    e.target.style.backgroundColor = "#F7F5ED";
    let pink = e.target.style.backgroundColor;
    e.target.style.border =`0.5px solid ${pink}`;
    e.target.style.opacity = 1;
   }
   else if(currenttool === "erase")
   {
    e.target.style.backgroundColor = "#ffffff";
    e.target.style.border = `0.5px solid #ffffff`;
   }
   
    });
   
  

}
}//loop end

});//button end
//function for random color
function getrandomcolor()
{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}
  