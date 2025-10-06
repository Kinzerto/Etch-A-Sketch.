const container = document.querySelector('.container');

let grid = 16;
for(let i = 1; i <= grid; i++){
    const containDiv= document.createElement(`div`);
    container.append(containDiv)
    containDiv.classList.add(`containDiv`)
    for(let j = 0; j < grid; j++){
        const div = document.createElement('div')
        
        div.setAttribute('style','height:20px; width:20px; border: 1px solid black;')
        containDiv.append(div)
    }
}


