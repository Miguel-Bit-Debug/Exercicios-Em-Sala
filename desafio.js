let nome = document.getElementById('nome')
let rg = document.getElementById('rg')
let cpf = document.getElementById('cpf')
let email = document.getElementById('email')
let nota1 = document.getElementById('nota01')
let nota2 = document.getElementById('nota02')
let nota3 = document.getElementById('nota03')
let media = document.getElementById('media')
//let situacao = document.getElementById('situacao')

let aluno = {
    Nome: '', 
    RG: '',
    CPF: '',
    Email: '',
    Nota01: 0,
    Nota02: 0,
    Nota03: 0,
    Media: 0,
    Situacao: '',
}

function recebe() {
    aluno.Nome = nome.value
    aluno.RG = rg.value
    aluno.CPF = cpf.value
    aluno.Email = email.value
    aluno.Nota01 = Number(nota1.value)
    aluno.Nota02 = Number(nota2.value)
    aluno.Nota03 = Number(nota3.value)
    aluno.Media = (aluno.Nota01 + aluno.Nota02 + aluno.Nota03) / 3
   // aluno.Situacao = situacao.value
}
    
function calcular(){
    
    recebe()

    if (aluno.Media <= 5){
        media.placeholder = `Média ${aluno.Media}  ( Reprovado )`
    }

    else if (aluno.Media > 5 && aluno.Media <= 7){
        media.placeholder = `Média ${aluno.Media}  ( Recuperação )`
    }

    else if (aluno.Media > 7){
        media.placeholder = `Média ${aluno.Media}  ( Aprovado )`
       
    }
}

}