function calcular(){
    var txtvelo = document.getElementById('txtvel') //pego a velocidade digitada
    var resp = document.getElementById('resultado') //uso para exibir a resposta
    var velo = Number(txtvelo.value) //coverto para numero

    if (velo == 0) {
        alert('por favor preencha os campos')
    } else if(velo >60){
        resp.innerHTML += ` Multado por excesso de velocidade `
    } else{
        resp.innerHTML = `sua velocidade atual é de ${velo} Km/h`
    }
}
function informar(){
    var inputPais = document.getElementById('pais') // pego o pais digitado
    var resp = document.getElementById('resp') //uso para exibir a resposta
    var nacionalidade = inputPais.value.toLowerCase()
    if (nacionalidade.trim() == '') {
        alert('por favor preencha os campos')
    } else if (nacionalidade !='brasil'){
        resp.innerText = `você mora no pais: ${nacionalidade} e é estrangeiro`	
    } else{
        resp.innerText = `você mora no pais ${nacionalidade} e é brasileiro`
    }
}
