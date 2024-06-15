
const container = document.querySelector(".container");
let boxColor = "red";

function create8x8 () {
    

    for (let z = 0; z<63; z++ )
        {
            const newDiv = document.createElement("div")
            newDiv.className = "box";
            newDiv.id = [z];
            container.appendChild(newDiv);
         
        }
}
create8x8();



function create16x16 () {
    for (let z = 0; z < 256; z++)
        {
            newDiv = document.createElement("div")
            newDiv.className = "box";
            newDiv.id = [z];
            container.appendChild(newDiv);
   
        }
}



//create16x16();




console.log("tes");

/* to add a red class onto the divs */
//select box...
const page = document.querySelectorAll(".box");

//assign event listener 
for (let i = 0; i < page.length; i++) {

    page[i].addEventListener("mouseover", function(e) { 

        console.log("ADDED EVENT LISTENER TO ID : " + page[i]);
        //get the element that has been hovered, and add red. 
        document.getElementById(this.id).style.backgroundColor = boxColor;
    })
}

//reset - select all elements with class box, its storing in an array
function reset() {

    const newpage = document.querySelectorAll(".box");
    //for every elemenet in the array, loop
    for (let x = 0; x < newpage.length;  x++) {
        //set bg color to white
    newpage[x].style.backgroundColor = "#d3d3d3";
    boxColor = "blue"
    
    }
}

function calculateRandomRGBNumber () {
    //calculate a random color 

    let x = Math.floor((Math.random() * 255) + 100);
    console.log("RANDOM COLOR : " + x);
    const colorArray = [];
    colorArray.push(x);
    
    x = Math.floor((Math.random() * 255) + 100);
    colorArray.push(x);

    x = Math.floor((Math.random() * 255) + 100);
    colorArray.push(x);

    console.log("arr colors : " + colorArray[0].toString(), colorArray[1].toString(), colorArray[2].toString());
    let final = "rgb(" + colorArray[0].toString() + "," + colorArray[1].toString() + "," + colorArray[2].toString() + ")";

    console.log("FINAL : " + final);

    return (final)
}

function setBoxColor () {
    boxColor = calculateRandomRGBNumber();
}

