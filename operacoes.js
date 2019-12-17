function calcularOperacao(){

var num1 = Number(document.querySelector('#n1').value)
var num2 = Number(document.querySelector('#n2').value)

var soma = num1 + num2
var sub = num1 - num2
var divisao = num1 / num2
var mult = num1 * num2

    if(document.querySelector('#escolha').value == 'adiçao'){
        document.getElementById('res').value = soma
    }

    else if(document.querySelector('#escolha').value == 'multiplicacao'){
        document.getElementById('res').value = mult
    }

    else if(document.querySelector('#escolha').value == 'subtracao'){
        document.getElementById('res').value = sub
    }

    else if(document.querySelector('#escolha').value == 'divisao'){
        document.getElementById('res').value = divisao
    }

}