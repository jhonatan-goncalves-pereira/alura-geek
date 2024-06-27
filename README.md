# Projeto de Lista de Produtos - CRD COM JSON-SERVER

Este projeto consiste em uma aplicação web simples para listar produtos e permitir o cadastro de novos produtos através de um formulário. Os dados dos produtos são armazenados em um arquivo JSON localmente utilizando o JSON Server para simulação de um servidor RESTful.

## Funcionalidades

- Exibir uma lista de produtos com imagens, nomes e preços.
- Adicionar novos produtos através de um formulário.
- Remover produtos da lista.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Um navegador web moderno
- Node.js e npm (Node Package Manager)
- JSON Server (para simulação do servidor RESTful)

## Instalação e Execução

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/jhonatan-goncalves-pereira/alura-geek.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd alura-geek
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Inicie o servidor JSON na raiz:**

   ```bash
   json-server --watch .\db_geeks.json 
   ```

5. **Execute o projeto:**

   - Abra o arquivo `index.html` no seu navegador.

## Como Usar

- **Adicionar um novo produto:**
  1. Preencha os campos "nome", "valor" e "imagem(URL- copie o endereço de imagem na WEB)" no formulário de adição de produtos.
  2. Clique no botão "GUARDAR" para adicionar o produto à lista.

- **Remover um produto:**
  - Clique no ícone de lixeira ao lado de um produto na lista para removê-lo.

## Estrutura do Projeto

- **`index.html`**: Contém a estrutura HTML da aplicação.
- **`assets/`**: Diretório com arquivos estáticos como imagens e estilos CSS.
- **`db_geewks.json`**: Arquivo JSON para armazenamento dos dados dos produtos.
- **`requisicoes.js`**: Script JavaScript para manipulação dos dados (adicionar, remover, listar).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou reportar issues.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

## Conecte-se

[Meu linkedin](https://www.linkedin.com/in/jhonatan-goncalves-pereira/)