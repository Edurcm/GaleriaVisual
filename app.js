const galeria = document.getElementById('galeria');
const modal = document.getElementById('modal');
const imgModal = document.getElementById('img-modal');
const fecharModal = document.getElementById('fechar-modal');
const setaEsquerda = document.getElementById('seta-esquerda');
const setaDireita = document.getElementById('seta-direita');
const abasContainer = document.getElementById('abas');
const campoBusca = document.getElementById('campo-busca');

const imagens = [{
    src: `Imagem1.jpeg`, 
    alt: `“Fúria vermelha diante de um Impuro colossal”` 
  },
  {
    src: `Imagem2.jpeg`, 
    alt: `“A dama da luz conversando com a sua melhor amiga e protetora”` 
  },
  // ... adicione as outras imagens e descrições aqui ...
  // Exemplo:
  {
    src: `Imagem3.jpeg`,
    alt: `“Edan recuava, tentando desviar das lâminas de Selina. O que antes era amizade agora se transformara em uma batalha tensa, onde cada movimento era um golpe, cada olhar uma ameaça.”`
  },
  {
    src: `Imagem4.jpeg`,
    alt: `Assim que os seus olhos se voltaram para o céu, o dragão das sombras começou a bater as suas asas sobre os guerreiros que chegavam para confrontá-lo, criando uma parede de vento que destruiu as decorações que enfeitavam a Zona Nobre.`
  },
  {
    src: `Imagem5.jpeg`,
    alt: `Embate entre as forças da luz e das trevas`
  },
  {
    src: `Imagem6.jpeg`,
    alt: `Combatente enfrentando uma criatura das trevas`
  },
  {
    src: `Imagem7.jpeg`,
    alt: `Castelo repleto de luz`
  },
  {
    src: `Imagem8.jpeg`,
    alt: `Gritos de liberdade`
  },
  {
    src: `Imagem9.jpeg`,
    alt: `Divindades mitológicas`
  },
  {
    src: `Imagem10.jpeg`,
    alt: `Aedra e os orfãos das luas`
  },
  {
    src: `Imagem11.jpeg`,
    alt: `Manipulação de espírito`
  },
  {
    src: `Imagem12.jpeg`,
    alt: `Impuros-espíritos das sombras`
  },
  {
    src: `Imagem13.jpeg`,
    alt: `Impuros-espíritos das sombras`
  },
  // ... e assim por diante ...
];

let imagemAtual = 0;
let abaAtual = 0;

function carregarImagens() {
  const imagensPorAba = 6; 
  const numeroAbas = Math.ceil(imagens.length / imagensPorAba);

  for (let i = 0; i < numeroAbas; i++) {
    const aba = document.createElement('div');
    aba.classList.add('aba');
    aba.innerText = `Aba ${i + 1}`;
    aba.addEventListener('click', () => mostrarAba(i));
    abasContainer.appendChild(aba);
  }

  mostrarAba(abaAtual); 
}

function mostrarAba(indiceAba) {
  const abaAtivaAnterior = document.querySelector('.aba.ativa');
  if (abaAtivaAnterior) {
    abaAtivaAnterior.classList.remove('ativa');
  }

  abasContainer.children[indiceAba].classList.add('ativa');

  abaAtual = indiceAba;
  atualizarGaleria();
}

function atualizarGaleria() {
    const termoDeBusca = campoBusca.value.toLowerCase();
    galeria.innerHTML = ''; 
  
    const imagensPorAba = 6;
    const inicio = abaAtual * imagensPorAba;
    const fim = inicio + imagensPorAba;
  
    const imagensFiltradas = imagens.slice(inicio, fim).filter(imagem => {
      return imagem.alt.toLowerCase().includes(termoDeBusca);
    });
  
    imagensFiltradas.forEach((imagem, indice) => {
      const imgElement = document.createElement('img');
      imgElement.src = imagem.src;
      imgElement.alt = imagem.alt;
  
      imgElement.addEventListener('click', function() {
        imagemAtual = inicio + indice;
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
campoBusca.addEventListener('input', () => {
    mostrarAba(0); // Volta para a primeira aba ao buscar
    atualizarGaleria(); 
  });