function toca(idElemento) {
    document.querySelector(idElemento).play();
}

const listadeteclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listadeteclas.length; contador++) {
    const tecla = listadeteclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const audio = `#som_${instrumento}`;
    //console.log(audio);
    tecla.onclick = function () {
        toca(audio);
    }
    //console.log(contador);
}
