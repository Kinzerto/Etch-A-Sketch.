const container = document.querySelector('.container');

let grids = 16//default grid


function grid(){
    console.log(grids);
    for(let i = 1; i <= grids; i++){
    const containDiv= document.createElement(`div`);
    container.append(containDiv)
    containDiv.classList.add(`containDiv`)
    for(let j = 0; j < grids; j++){
        const div = document.createElement('div')
        containDiv.append(div)
    }
}


    let isMouseDown = false;
    // detect mouse hold 
    document.addEventListener('mousedown', (e) => {
        if (e.button === 0) isMouseDown = true;  // left button
    });
    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    const allBox =  document.querySelectorAll('.containDiv div')
    allBox.forEach((box) =>{
        box.addEventListener('mouseenter', (event)=>{   
        if(isMouseDown){
                let colorGenerate= Math.trunc(Math.random() * 255) + 1;
                box.style.backgroundColor = `rgb(${colorGenerate}, ${colorGenerate}, 161,40%)`;
             } 
         })
    })   
}
grid()
//erase 
eraseButton = document.querySelector('.erase')

eraseButton.addEventListener('click', () =>{
    box = document.querySelectorAll('.containDiv div');
    box.forEach(box =>{
        box.style.backgroundColor = "transparent";
    })
})

//new grid
const button = document.querySelector('.grid');
button.addEventListener('click', () =>{
    const divs = document.querySelectorAll(".containDiv");
    divs.forEach((box)=>{
        box.remove()
    })
    do{
        grids = +prompt("How many Grid?(Limit 100): ");
    }
    while (grids >100)
    grid()
})




