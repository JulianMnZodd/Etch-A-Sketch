
document.addEventListener('DOMContentLoaded',function(){
    crearTablero(16);
})

function crearTablero(tamanio){
    let $tablero = document.querySelector('.tablero')
    $tablero.style.gridTemplateColumns= `repeat(${tamanio},1fr)`;
    $tablero.style.gridTemplateRows= `repeat(${tamanio},1fr)`;

    let numDivs = tamanio*tamanio;
    for(let i=0; i<numDivs; i++){
        let div = document.createElement('div');
        div.style.cssText='border:solid 1px;'
        $tablero.insertAdjacentElement('beforeend',div);
    }
}




