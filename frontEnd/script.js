const slideImage = document.getElementById ('container-links')
const tempTransion = 3000;

const images = [
    'https://i.pinimg.com/736x/df/93/7d/df937d4b92698cb1e035add7ca46b53e.jpg',
    'https://i.pinimg.com/736x/3c/21/ed/3c21ed5453fe6f8e9bb4975b489cbfb9.jpg',
    'https://i.pinimg.com/736x/78/a3/a5/78a3a5aa1828c250f7a4734d97ecdc36.jpg',
    'https://i.pinimg.com/736x/e1/0a/d7/e10ad74334354b5b61e0b2d7823e603d.jpg',
    'https://i.pinimg.com/1200x/2e/86/3c/2e863c0168b78f3fd0a13e7fdc4a6553.jpg'
];

let indiceAtual = 0;

function atualizarFundo () {
    slideImage.style.backgroundImage = `url('${images[indiceAtual]}')`;
}

function proximoSlide () {
    indiceAtual++;
    if (indiceAtual >= images.length) {
        indiceAtual = 0;
    }
    atualizarFundo()
}

function slideAnterior () {
    indiceAtual--;
    if (indiceAtual < 0) {
        indiceAtual = images.length - 1;
    }
    atualizarFundo()
}

setInterval(3000)