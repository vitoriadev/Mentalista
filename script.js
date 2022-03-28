var numeroSecreto = parseInt(Math.random() * 11)

function Chutar() {
    var elementoResultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value)
    console.log("chute")
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Parabéns, você acertou!🎆"
    } else if (chute < 10 || chute > 0) {
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10"
    } else {
        elementoResultado.innerHTML = "Ops, você errou!😞"
    }
}