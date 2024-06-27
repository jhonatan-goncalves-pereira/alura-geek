document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
  
    document.querySelector('.adiciona__produtos__formulairio').addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const nome = event.target.querySelector('input[placeholder="nome.."]').value;
      const preco = event.target.querySelector('input[placeholder="valor.."]').value;
      const imagem = event.target.querySelector('input[placeholder="imagem.."]').value;
  
      const novoProduto = { nome, preco, imagem };
  
      try {
        // Requisição POST para adicionar um novo produto
        const response = await fetch('http://localhost:3000/produtos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(novoProduto)
        });
  
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
  
        // Atualiza a lista de produtos
        fetchProducts();
      } catch (error) {
        console.error('Erro ao adicionar produto:', error);
      }
  
      // Limpa o formulário
      event.target.reset();
    });
  });
  
  async function fetchProducts() {
    try {
      const response = await fetch('http://localhost:3000/produtos');
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      const produtos = await response.json();
      displayProducts(produtos);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }
  
  function displayProducts(produtos) {
    const container = document.querySelector('.exibe__produtos__cards');
    container.innerHTML = ''; // Limpa o conteúdo atual
  
    produtos.forEach(produto => {
      const card = document.createElement('figure');
      card.classList.add('exibe__produtos__card');
      
      card.innerHTML = `
        <img src="${produto.imagem}" alt="" class="exibe__produtos__card__img">
        <span class="exibe__produtos__card__titulo">${produto.nome}</span>
        <figcaption>
          <span>R$ ${produto.preco} </span>
          <img src="assets/images/🦆 icon _trash 2_.png" alt="">
        </figcaption>
      `;
      
      container.appendChild(card);
    });
  }
  