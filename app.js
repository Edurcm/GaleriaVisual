const galeria = document.getElementById('galeria');
const modal = document.getElementById('modal');
const imgModal = document.getElementById('img-modal');
const fecharModal = document.getElementById('fechar-modal');
const setaEsquerda = document.getElementById('seta-esquerda');
const setaDireita = document.getElementById('seta-direita');

const imagens = [
    {
        "src": "Imagem1.jpeg",
        "alt": "“O ar gelou, e um rugido ecoou pelas montanhas. Selina agarrou suas espadas gêmeas e as chamas escarlates dançaram em torno dela. O Impuro colossal avançava, mas a Fúria Vermelha não recuaria. Era uma batalha pelo destino de Luminare. E a luz de Ellynia brilhava no horizonte, um grito de esperança contra as sombras.”"
    },
    {
        "src": "Imagem2.jpeg",
        "alt": "“Evaline olhou para Selina, seus olhos prateados brilhando com uma nova luz. A aliança entre elas era tão forte quanto a própria tocha de Ellynia. Mas uma sombra pairou entre elas, um mistério que ameaçava destruir tudo o que elas haviam conquistado.”"
    },
    {
        "src": "Imagem3.jpeg",
        "alt": "“Edan recuava, tentando desviar das lâminas de Selina. O que antes era amizade agora se transformara em uma batalha tensa, onde cada movimento era um golpe, cada olhar uma ameaça.”"
    },
    // Adicione mais imagens aqui...
];

let imagemAtual = 0;

function carregarImagens() {
    imagens.forEach((imagem, indice) => { // Incluindo o índice
        const imgElement = document.createElement('img');
        imgElement.src = imagem.src;
        imgElement.alt = imagem.alt;

        imgElement.addEventListener('click', function() {
            imagemAtual = indice; // Atualiza a imagem atual ao clicar
            exibirImagem(imagemAtual);
            modal.style.display = "block"; 
        });

        galeria.appendChild(imgElement);
    });
}

function exibirImagem(indice) {
    if (indice < 0) {
        imagemAtual = imagens.length - 1;
    } else if (indice >= imagens.length) {
        imagemAtual = 0;
    } else {
        imagemAtual = indice;
    }

    imgModal.src = imagens[imagemAtual].src;
    document.getElementById('descricao-modal').innerText = imagens[imagemAtual].alt;
}

fecharModal.addEventListener('click', function() {
    modal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

setaEsquerda.addEventListener('click', function() {
    exibirImagem(imagemAtual - 1);
});

setaDireita.addEventListener('click', function() {
    exibirImagem(imagemAtual + 1);
});

window.onload = carregarImagens;