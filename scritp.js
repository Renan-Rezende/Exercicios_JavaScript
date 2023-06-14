// FUNÇÃO  Inverter String

function inverter(palavra) {

   var palavraInvertida = ""

   for (var i = palavra.length - 1; i >= 0; i--) {
     palavraInvertida += palavra[i]
  }

  console.log(palavraInvertida)
}

Iverter("Otario")



// FUNÇÃO  Frequencia de valores 

function frequencia(matriz) {

  var objeto = {}

  for (let i = 0; i < matriz.length; i++) {

    if (matriz[i] in objeto) {

      objeto[matriz[i]] += 1
    } else {

      objeto[matriz[i]] = 1
    }

  }

  console.log(objeto)

}

frequencia([1, 2, 3, 1, 1, 3, 3, 2, 2, 5, 4, 5, 4])

