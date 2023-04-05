const input = document.getElementById('campo')
const resultado = document.getElementById('resultado')
const copiar = document.getElementById('copiar')
const possiveis = ["(", ")", "/", "*", "-", "+", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
input.addEventListener('click', function(){
    copiar.innerText = 'copiar'
})
input.addEventListener('keydown', function(evento){
    evento.preventDefault()
    copiar.innerText = 'copiar'
    if (possiveis.includes(evento.key)){
        input.value += evento.key
    }  
    if (evento.key == 'Backspace'){
        input.value = input.value.slice(0,-1)
    }
    if (evento.key == 'Enter'){
        calcular()
    }
})

document.querySelectorAll('.charkey').forEach(function(x){
    x.addEventListener('click', function(){
        const valor = x.dataset.value
        input.value += valor
    })
})

document.getElementById('limpar').addEventListener('click', function(){
    input.value = ''
    resultado.value = ''
})

document.getElementById('igual').addEventListener('click', calcular)

function calcular(){
    const valor = eval(input.value)
    resultado.value = valor
}

copiar.addEventListener('click', function(evento){
    navigator.clipboard.writeText(resultado.value)
    copiar.innerText='copiado'
    
})