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



function search() {
    var input, filter, container, items, text, i;

    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    container = document.getElementsByClassName("container")[0];
    items = container.getElementsByClassName("item-peca");

    for (i = 0; i < items.length; i++) {
        text = items[i].getElementsByClassName("text-peca")[0].getElementsByTagName("h2")[0].innerText;
        if (text.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}



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
    'slide9' :0,
    'slide10' :0,
    'slide11' :0,
    'slide12' :0,
    'slide13' :0,
    'slide14' :0,
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
showSlide('slide9', currentSlide['slide9']);
showSlide('slide10', currentSlide['slide10']);
showSlide('slide11', currentSlide['slide11']);
showSlide('slide12', currentSlide['slide12']);
showSlide('slide13', currentSlide['slide13']);
showSlide('slide14', currentSlide['slide14']);
// Adicione mais conforme necessário






function enviarMenssagem(itemText) {
  // Número de telefone e mensagem predefinida
  const numeroTelefone = '+5561992011822';  // Substitua pelo número de telefone desejado
  const mensagem = encodeURIComponent(`Olá tudo bem! Vim pelo site e tenho interesse no item: ${itemText}`);

  // Montar o link do WhatsApp com o número e mensagem
  const linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${mensagem}`;

  // Redirecionar para o link do WhatsApp
  window.location.href = linkWhatsApp;
}



