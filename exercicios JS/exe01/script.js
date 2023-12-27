function load(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
 var data = new Date()
var hora =  data.getHours()
var minutos = data.getMinutes()

msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
 if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = 'imgns/manha.png'
    document.body.style.background = "#4184eabf"
 } else if(hora >= 12 && hora<=18){
    //boa tarde
    img.src = 'imgns/tarde.png'
    document.body.style.background = "#f9943abd"
 } else{
    // boa noite
    img.src = 'imgns/noite.png'
    document.body.style.background = "#081D3C"
 }
}
document.addEventListener('DOMContentLoaded', load);
