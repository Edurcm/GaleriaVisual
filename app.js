const swiperWrapper = document.querySelector('.swiper-wrapper');
const gridContainer = document.querySelector('.grid-container');

for (let i = 1; i <= 16; i++) {
  const imageName = `imagens/Imagem${i}.jpeg`; 
  const imageDescription = `Descrição da Imagem ${i}`; 

  // Cria o slide do carrossel
  const slide = document.createElement('div');
  slide.classList.add('swiper-slide');
  slide.innerHTML = `<img src="${imageName}" alt="${imageDescription}">`;
  swiperWrapper.appendChild(slide);

  // Cria a miniatura do álbum
  const link = document.createElement('a');
  link.href = imageName;
  link.setAttribute('data-lightbox', 'galeria');
  link.setAttribute('data-title', imageDescription);
  link.innerHTML = `<img src="${imageName}" alt="${imageDescription}" />`;
  gridContainer.appendChild(link);
}

// Inicializa o Swiper após adicionar os slides
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});