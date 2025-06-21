const imagens = document.getElementById('carrossel-imagens');
const totalImagens = imagens.children.length;
const imagensPorSlide = 3;
const totalSlides = Math.ceil(totalImagens / imagensPorSlide);

let index = 0;

function atualizarCarrossel() {
  imagens.style.transform = `translateX(-${index * 100}%)`;
}

function proximo() {
  index = (index + 1) % totalSlides;
  atualizarCarrossel();
}

function anterior() {
  index = (index - 1 + totalSlides) % totalSlides;
  atualizarCarrossel();
}
