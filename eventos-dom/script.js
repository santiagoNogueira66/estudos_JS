var area = document.getElementById('area')
area.addEventListener('click',clicar)
area.addEventListener('mouseenter',entrar)
area.addEventListener('mouseout',sair)
function clicar() {
    area.innerText = 'clicou'
    area.style.backgroundColor='#008000'
}
function entrar(){
    area.innerText = 'entrou' 
    area.style.backgroundColor='blue'
}

function sair(){
    area.innerText = 'saiu'
    area.style.backgroundColor='red' 
}
function somar(){
    var txtn1 = document.getElementById('n1')
    var txtn2 = document.getElementById('n2')
    var resultado = document.getElementById('resultado')
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var soma = n1+n2
    resultado.innerHTML = `A soma entre ${n1} e ${n2} é igual a: ${soma}`
}