
let numero = 0

//Incrementar e decrementar o número
function incrementar(incrementar) {
    numero += 1
    AtualizarNumero()
}

function decrementar(decrementar) {
    numero -= 1
    AtualizarNumero()
}

// Atualizar o número
function AtualizarNumero(){
    const p = document.getElementById('numero')
    p.innerText = numero
}

// iniciar // redenrizar 
AtualizarNumero()
