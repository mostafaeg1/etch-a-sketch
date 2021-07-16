

function make_grid(size)
{
    let container=document.getElementById("grid-container");
    container.style.gridTemplateColumns=`repeat(${size},1fr)`;
    btn=document.getElementById("Grade-Lines");
    for(let i=0;i<size*size;i++)
    {
        let grid_item=document.createElement("div");
        grid_item.classList.add("grid-item");
        grid_item.addEventListener("mouseover",change_color)
        container.appendChild(grid_item);
        if(btn.classList.contains("clicked"))
        {
           grid_item.style.border="1px solid white";
        }
    }
}
make_grid(16);


let items=document.getElementsByClassName("grid-item");
for(let i=0;i<items.length;i++)
{
   
}

function random_color()
{
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
return rgb;
}

function change_color(e)
{


    let radio=document.getElementById("black");
    let eraser=document.getElementById("eraser");
    if(radio.checked)
    {
        e.target.style.backgroundColor="black";
    }
    else  if(eraser.checked)
    {
        e.target.style.backgroundColor= "#e5e5e5";
    }
    else
    {
        e.target.style.backgroundColor= random_color();
    }
}


//////// clear button ////////
document.getElementById("clear").addEventListener("click",clear);
function clear() {
    grids=document.getElementsByClassName("grid-item");
    for(let i=0;i<grids.length;i++)
    {
        grids[i].style.backgroundColor="#e5e5e5";
    }
}


/////// change size button ///////
document.getElementById("change-size").addEventListener("click",change_size);

function change_size() {
    newsize=prompt("Enter new size");
   if( newsize!=null)
    {
        newsize=parseInt(newsize);
        if(newsize>64||newsize<1 || isNaN(newsize))
        {
            alert("Enter a number from 1-64 range");
            change_size();
        }
        else
        {
            clear_grid();
            make_grid(newsize);
        }
    }
    

   
}

function clear_grid() {
    document.querySelectorAll(".grid-item")
    .forEach((e) => e.parentNode.removeChild(e)); 
}

//////////  adding and removing grade lines ////////////
document.getElementById("Grade-Lines").addEventListener("click",Grade_lines);
function  Grade_lines(e) {
    if(e.target.classList.contains("clicked"))
    {
        console.log("m");
      e.target.classList.remove("clicked");
      grids=document.getElementsByClassName("grid-item");
        for(let i=0;i<grids.length;i++)
        {
            grids[i].style.border="none";
        }
    }
    else
    {
        e.target.classList.add("clicked");
        grids=document.getElementsByClassName("grid-item");
        for(let i=0;i<grids.length;i++)
        {
            grids[i].style.border="1px solid white";
        }
    }
}