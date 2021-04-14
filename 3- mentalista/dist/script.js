var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3
alert("Vamos jogar?")
alert("Você terá apenas 3 tentativas.")
alert("Preparado(a)...")

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número entre 0 e 20"))

  if (numeroSecreto == chute) {
    alert("Parabéns você acertou!")
    break
  } else if(chute > numeroSecreto) {
    alert("O número secreto é menor")
    tentativas = tentativas - 1
  } else if(chute < numeroSecreto) {
    alert("O número secreto é maior")
    tentativas = tentativas - 1
  }
}

if (chute != numeroSecreto) {
  alert("Infelizmente suas tentativas acabaram. O número secreto era " + numeroSecreto)
}