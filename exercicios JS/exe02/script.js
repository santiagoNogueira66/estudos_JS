function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var resultado = document.getElementById('res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[erro] Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';

        var imgElement = document.createElement('img');
        imgElement.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'masculino';
            if (idade >= 1 && idade <= 12) {
                imgElement.setAttribute('src', 'imgns/bebe homem.png');
            } else if (idade >=13 && idade <=17){
                imgElement.setAttribute('src', 'imgns/jovem.png');
            }
            else if (idade >= 18 && idade <= 40) {
                imgElement.setAttribute('src', 'imgns/adulto 1.png');
            } else if (idade>=41){
                imgElement.setAttribute('src', 'imgns/homem idoso.png');
            }
        } else if (fsex[1].checked) {
            genero = 'feminino';
            if (idade > 0 && idade <= 12) {
                imgElement.setAttribute('src', 'imgns/bebe mulher.png');
            } else if (idade >= 13 && idade <= 30) {
                imgElement.setAttribute('src', 'imgns/mulher jovem.png');
            } else if (idade >= 31 && idade <= 40) {
                imgElement.setAttribute('src', 'imgns/mulher adulta.png');
            } else if (idade>=41){
                imgElement.setAttribute('src', 'imgns/mulher idosa.png');
            }
        }

        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        resultado.appendChild(imgElement);
    }
}
