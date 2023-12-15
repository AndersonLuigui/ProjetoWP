function filterByCategory() {
    var selectedCategory = document.getElementById('categoriaSelect').value;
    var itemPecas = document.querySelectorAll('.item-peca');

    itemPecas.forEach(function(itemPeca) {
        var categoriaPeca = itemPeca.querySelector('.categoria-peca');

        if (selectedCategory === '' || categoriaPeca.classList.contains(selectedCategory)) {
            itemPeca.style.display = 'block';
        } else {
            itemPeca.style.display = 'none';
        }
    });
}

/* let currentSlide = 0;
const slides = document.querySelectorAll('.slide-img');
const totalSlides = slides.length; */

function showSlide(slideId, index) {
    const slides = document.querySelectorAll(`#${slideId} .slide-img`);
    const totalSlides = slides.length;

    if (index < 0) {
        currentSlide[slideId] = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlide[slideId] = 0;
    } else {
        currentSlide[slideId] = index;
    }

    for (let i = 0; i < totalSlides; i++) {
        if (i === currentSlide[slideId]) {
            slides[i].style.display = 'block';
        } else {
            slides[i].style.display = 'none';
        }
    }
}

function prevSlide(slideId) {
    showSlide(slideId, currentSlide[slideId] - 1);
}

function nextSlide(slideId) {
    showSlide(slideId, currentSlide[slideId] + 1);
}

// Inicialize o array currentSlide para cada item de peça
const currentSlide = {
    'slide1': 0,
    'slide2': 0,
    'slide3' :0,
    'slide4' :0,
    'slide5' :0,
    'slide6' :0,
    'slide7' :0,
    'slide8' :0,
    // Adicione mais conforme necessário
};

// Exibe o primeiro slide de cada item ao carregar a página
showSlide('slide1', currentSlide['slide1']);
showSlide('slide2', currentSlide['slide2']);
showSlide('slide3', currentSlide['slide3']);
showSlide('slide4', currentSlide['slide4']);
showSlide('slide5', currentSlide['slide5']);
showSlide('slide6', currentSlide['slide6']);
showSlide('slide7', currentSlide['slide7']);
showSlide('slide8', currentSlide['slide8']);
// Adicione mais conforme necessário