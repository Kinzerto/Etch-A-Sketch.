const container = document.querySelector('.container');

let grids = 16


function grid(){
    console.log(grids);
    for(let i = 1; i <= grids; i++){
    const containDiv= document.createElement(`div`);
    container.append(containDiv)
    containDiv.classList.add(`containDiv`)
    for(let j = 0; j < grids; j++){
        const div = document.createElement('div')
        div.setAttribute('style','border: 1px solid black;')
        containDiv.append(div)
    }
}
}

grid()
const button = document.querySelector('.grid');

button.addEventListener('click', () =>{
    const divs = document.querySelectorAll(".containDiv");
    divs.forEach((divko)=>{
        divko.remove()
    })
    grids = +prompt("how many: ");
    grid()
})



