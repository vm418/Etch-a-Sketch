const container = document.querySelector('.container');
// default color is black
var color = 'black'
const size = document.querySelector('#size');
const erase = document.querySelectorAll('#erase');

function gridSize() {    
// changes number of pixels in the container max number of 100 x 100
    let number = prompt("Enter a number betweem 1 and 100");
    if (number <= 100){
        // remove pixel divs within container
        while(container.firstChild) {
            container.removeChild(container.lastChild);
            
        }
        // change size of the grid
        container.style.gridTemplateColumns = "repeat("+ number +",1fr)";
        container.style.gridTemplateRows = "repeat("+ number +",1fr)";
        // add new pixel divs
        for (i = 0; i < number ** 2; i++){
            const div = document.createElement('div');
            div.classList.add('pixel');
            container.appendChild(div);
        }
        // detect mouse hovering to change color
        const pixels = container.querySelectorAll('.pixel');
        pixels.forEach((pixel) => {
            pixel.addEventListener('mouseover', () =>{
                pixel.style.backgroundColor = color ;
            });
        });
        // change all pixel divs to white if button pressed
        erase[0].addEventListener('click', () =>{
            pixels.forEach((pixel) => {
                pixel.style.backgroundColor = "white" ;
            });
        });

    }else{
        alert("Max size is a 100");

    }
}


function setColor() {
    // set background color of pixel divs to color
    color = prompt("Enter a colour");

}

// default size of 16 x 16 pixels
for (i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.classList.toggle('pixel');
    container.appendChild(div);
}

// if size button clicked call function to change size
size.addEventListener('click', gridSize);

// if erase button clicked all pixel divs background color white
erase[0].addEventListener('click', () =>{
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = "white" ;
    });
});

// if mouse hovers of any pixel div change it's background color 
const pixels = container.querySelectorAll('.pixel');
pixels.forEach((pixel) => {
    pixel.addEventListener('mousedown', () =>{
        pixel.style.backgroundColor = color ;
    });
});

