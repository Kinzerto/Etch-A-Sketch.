const container = document.querySelector('.container');

let grids = 16
grid()
function grid(){
    console.log(grids);
    for(let i = 1; i <= grids; i++){
    const containDiv= document.createElement(`div`);
    container.append(containDiv)
    containDiv.classList.add(`containDiv`)
    for(let j = 0; j < grids; j++){
        const div = document.createElement('div')
        // div.setAttribute('style'')
        containDiv.append(div)
    }
}

//paint the boxes
const allBox =  document.querySelectorAll('.containDiv div')
allBox.forEach((box) =>{
    box.addEventListener('mousemove', (event)=>{
    if(event.button === 0 ){
        console.log(event.button);
        const box = event.target;
        box.setAttribute('style', 'background-color: black;')
    }
})

} )
}
//erase 
eraseButton = document.querySelector('.erase')

eraseButton.addEventListener('click', () =>{
    box = document.querySelectorAll('.containDiv div');
    box.forEach(box =>{
        box.style.backgroundColor = "transparent";
    })
})


const button = document.querySelector('.grid');
button.addEventListener('click', () =>{
    const divs = document.querySelectorAll(".containDiv");
    divs.forEach((box)=>{
        box.remove()
    })
    grids = +prompt("how many: ");
    grid()
})




