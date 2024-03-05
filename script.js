let grid = document.querySelector('#grid')

let gridSize = 16;


function createGrid(size){
    
    for (let i = 0; i < (gridSize * gridSize); i++){
        let pixel = document.createElement('div')
        pixel.style.height = (650/ gridSize)
        pixel.style.width = (650 / gridSize)
        pixel.classList.add('pixel')
        grid.appendChild(pixel)
    }
}


const btnClear = document.querySelector('.btnClr')

btnClear.addEventListener('click', clearGrid)

function clearGrid(){
    let pixel = document.querySelector('.pixel')
    grid.removeChild(pixel)

}

const btnSize = document.querySelector('.btnSize')

function setSize(){
    let newSize = parseInt(prompt("How large would you like your canvas:\n Max Size - 100"))
    clearGrid()

    while(!(typeof(newSize) == 'number') || (0 < newSize && newSize > 100)){
        console.log(typeof newSize)
        newSize = parseInt(prompt('- Invalid Argument -\n How large would you like your canvas:\n Max Size - 100'))
    }
    
    createGrid(newSize)
    for (let i = 0; i < (newSize * newSize); i++){
        let pixel = document.createElement('div')
        pixel.style.height = (650/ newSize)
        pixel.style.width = (650 / newSize)
        pixel.classList.add('pixel')
        grid.appendChild(pixel)
    }
}

btnSize.addEventListener('click', setSize)


