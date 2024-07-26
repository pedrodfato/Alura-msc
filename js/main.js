function toca(IDelemento) {
    const elemento = document.querySelector(IDelemento);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        alert('Elemento não encontrado');
    }
}

const listadeteclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listadeteclas.length; contador++) {
    const tecla = listadeteclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const audio = `#som_${instrumento}`;
    //console.log(audio);
    tecla.onclick = function () {
        toca(audio);
    }
    //console.log(contador);
    tecla.onkeydown = function (evento) {
        console.log(evento.code);
        if (evento.code === "Enter" || evento.code === "Space") { tecla.classList.add('ativa'); }
    }
    tecla.onkeyup = function () { tecla.classList.remove('ativa'); }
}
