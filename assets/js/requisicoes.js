document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
  
    document.querySelector('.adiciona__produtos__formulairio').addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const nome = event.target.querySelector('input[placeholder="nome.."]').value;
      const preco = event.target.querySelector('input[placeholder="valor.."]').value;
      const imagem = event.target.querySelector('input[placeholder="imagem.."]').value;
  
      const novoProduto = { nome, preco, imagem };
  
      //adicionando localmente
      try {
        let response = await fetch('db_geeks.json');
        let data = await response.json();
        data.produtos.push(novoProduto);
        
        // SIMULA o envio dos dados para o servidor
        console.log('Produto adicionado:', novoProduto);
        displayProducts(data.produtos);
      } catch (error) {
        console.error('Erro ao adicionar produto:', error);
      }
  
      // Limpa o formulário
      event.target.reset();
    });
  });
  
  async function fetchProducts() {
    try {
      const response = await fetch('db_geeks.json');
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      const data = await response.json();
      displayProducts(data.produtos);
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
  