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