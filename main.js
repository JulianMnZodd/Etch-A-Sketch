let click = true
document.addEventListener('DOMContentLoaded',function(){
    crearTablero(16);

    let btn_size=document.querySelector('.size-btn')
    btn_size.addEventListener('click',()=>{
        let tam =getSize();
        crearTablero(tam)
    })
})

let $tablero = document.querySelector('.tablero')
function crearTablero(tamanio){
    //let $tablero = document.querySelector('.tablero')
    /***Elimina los elementos que sobran */
    let pixel = $tablero.querySelectorAll('div')
    pixel.forEach((div)=>div.remove())

    /***se crean los pixeles a dibujar */
    $tablero.style.gridTemplateColumns= `repeat(${tamanio},1fr)`;
    $tablero.style.gridTemplateRows= `repeat(${tamanio},1fr)`;

    let numDivs = tamanio*tamanio;
    for(let i=0; i<numDivs; i++){
        let div = document.createElement('div');
        div.addEventListener('mouseover',colorDiv)
        $tablero.insertAdjacentElement('beforeend',div);
    }
}

function getSize(){
    let size = document.querySelector('.size').value
    if (size>2 && size <=100){
        return size
    }
    else{
        alert('Ingrese un numero entre 2 y 100')
    }
}

$tablero.addEventListener('click',()=>{
    click = !click
})

/******BOTONES */

function limpiarTablero(){
    let divs = $tablero.querySelectorAll('div')
    divs.forEach((div)=>div.style.backgroundColor='white')
}

let color ='black'

function setColor(colorElegido){
   color = colorElegido
}

function colorDiv(){
    if(click){
        if(color == 'random'){
            this.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`
        }
        else if(color== 'white'){
            this.style.backgroundColor = 'white'
        }
        else{
            this.style.backgroundColor = color
        }
    }
}

