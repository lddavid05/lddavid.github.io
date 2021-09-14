let minhaImagem = document.querySelector('img');
minhaImagem.onclick = function(){
    let meuSrc = minhaImagem.getAttribute('src');
if(meuSrc === 'imagens/telegram-jr.jpg'){
minhaImagem.setAttribute('src','imagens/parece-veridico.jpg');
} else{
    minhaImagem.setAttribute ('src', 'imagens/telegram-jr.jpg');
}
}