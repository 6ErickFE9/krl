// Seleciona os elementos relevantes do DOM
const selectTipoProduto = document.getElementById('productType');
const selectGenero = document.getElementById('genre');
const inputAno = document.getElementById('year');
const cardsOriginais = document.querySelectorAll('.card');

// Adiciona um ouvinte de eventos para cada elemento de filtro
selectTipoProduto.addEventListener('change', filtrarProdutos);
selectGenero.addEventListener('change', filtrarProdutos);
inputAno.addEventListener('input', filtrarProdutos);

// Função para filtrar e exibir os produtos correspondentes
function filtrarProdutos() {
    const tipoSelecionado = selectTipoProduto.value.toLowerCase();
    const generoSelecionado = selectGenero.value.toLowerCase();
    const anoDigitado = inputAno.value.trim().toLowerCase();

    cardsOriginais.forEach(card => {
        const tipoCard = card.querySelector('ul li:nth-child(2)').textContent.toLowerCase().replace('tipo:', '').trim();
        const generoCard = card.querySelector('ul li:first-child').textContent.toLowerCase().replace('gênero:', '').trim();
        const anoCard = card.querySelector('ul li:nth-child(4)').textContent.toLowerCase().replace('data de lançamento:', '').trim();

        const tipoCorresponde = (tipoSelecionado === 'todos' || tipoCard === tipoSelecionado);
        const generoCorresponde = (generoSelecionado === 'todos' || generoCard.includes(generoSelecionado));
        const anoCorresponde = (anoDigitado === '' || anoCard.includes(anoDigitado));

        if (tipoCorresponde && generoCorresponde && anoCorresponde) {
            card.style.display = 'block'; // Exibe o card se corresponder aos critérios
        } else {
            card.style.display = 'none'; // Oculta o card se não corresponder aos critérios
        }
    });
}
