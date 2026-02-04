const container = document.querySelector(".container");
const button = document.querySelector(".btn");
//every time click here
button.addEventListener("click",()=>{

let n = document.createElement("input");
n = Number(prompt("set number of squares per side: "));

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
div.addEventListener("mouseover",function(e){
    
   e.target.style.backgroundColor = getrandomcolor();
    
        e.target.style.opacity = `${num}`;
        num = num+0.1;

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
  