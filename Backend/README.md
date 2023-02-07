<h2 align='center'>Projeto - Backend - ApiRest </h2>
<h2 align='center'>Tema do Projeto: Frutos do Pará</h2>


## 📄 Sobre
Primeira parte do projeto, desenvolvimento de uma API REST com Node.js, Express e MySQL, e todas as operações do CRUD para comprovação do funcionamento da API.

<br>

## 🔨 Ferramentas

- [Node](https://nodejs.org/pt-br/docs/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)

<br>

##  Modelo Logico - Fluxograma

<figure align="center">
<img align="center" width='600' src='./imgs/fluxograma.jpeg' alt='Fluxograma' title='Modelo Logico'>
<figcaption>Fluxograma simples das etapas da aplicação.</figcaption>
</figure>

<br>

## Tabelas do Banco - MySQL
<img align="center" width='600' src='./imgs/tables.jpeg' title='Tables'>
<figcaption>Quatro tabelas: <strong>Products, Store, Persons, Sales </strong>.</figcaption>

## Operações CRUD - Insomnia

<details>
  <summary><strong>GET:</strong></summary>
<div>
<details>
<summary>Products</summary>
<p>GET findAll - Lista todos os produtos</p>
<img align="center" width='500' src='./imgs/get-products-findAll.png'>

<p>GET oneGet - Busca um produto especifico, usando como parametro seu codigo</p>
<img align="center" width='500' src='./imgs/get-products-getOne.png'>

<p>GET Category - Busca todos os produtos de uma determinada categoria</p>
<img align="center" width='500' src='./imgs/get-products-category.png'>
</details>

<details>
<summary>Store</summary>
<p>GET findAll - Lista todas a lojas</p>
<img align="center" width='500' src='./imgs/get-store-findall.png'>

<p>GET oneGet - Busca uma loja especifica</p>
<img align="center" width='500' src='./imgs/get-store-getOne.png'>
</details>

<details>
<summary>Persons</summary>
<p>GET findAll - Lista todas os tipos de pessoas cadastradas</p>
<img align="center" width='500' src='./imgs/get-persons-findall.png'>

<p>GET findSeller - Busca um vendedor vinculado a uma loja</p>
<img align="center" width='500' src='./imgs/get-seller-persons.png'>

<p>GET oneGet - Busca um tipo de pessoa especifica</p>
<img align="center" width='500' src='./imgs/getone-persons.png'>
</details>

<details>
<summary>Sales</summary>
<p>GET findAll - Lista todas as vendas</p>
<img align="center" width='500' src='./imgs/get-store-findall.png'>

<p>GET oneGet - Busca uma venda especifica</p>
<img align="center" width='500' src='./imgs/get-store-getOne.png'>
</details>
  </details>

  <details>
    <summary><strong>POST:</strong></summary>
    <details>
    <summary>Products</summary>
      <p>Cadastrar produto</p>
      <img align="center" width='500' src='./imgs/post-products-insert.png'>
    </details>
    <details>
    <summary>Store</summary>
      <p>Cadastrar loja</p>
      <img align="center" width='500' src='./imgs/post-store-insert.png'>
    </details>
    <details>
    <summary>Persons</summary>
      <p>Cadastrar pessoas</p>
      <img align="center" width='500' src='./imgs/post-persons.png'>
    </details>
    <details>
    <summary>Sales</summary>
      <p>Cadastrar vendas</p>
      <img align="center" width='500' src='./imgs/post-persons.png'>
    </details>
    </details>

  <details>
    <summary><strong>PUT:</strong></summary>
    <details>
    <summary>Products</summary>
      <p>Atualizar um produto</p>
      <img align="center" width='500' src='./imgs/put-products-update.png'>
    </details>
       <details>
    <summary>Store</summary>
      <p>Atualizar uma loja</p>
      <img align="center" width='500' src='./imgs/put-store.png'>
    </details>
    <details>
    <summary>Persons</summary>
      <p>Atualizar um tipo de pessoa</p>
      <img align="center" width='500' src='./imgs/put-persons-update.png'>
    </details>
     <details>
    <summary>Sales</summary>
      <p>Atualizar uma venda</p>
      <img align="center" width='500' src='./imgs/put-persons-update.png'>
    </details>
  </details>

  <details>
    <summary><strong>DELETE:</strong></summary>
     <details>
    <summary>Products</summary>
      <p>Deletar um produto</p>
      <img align="center" width='500' src='./imgs/delete-products.png'>
    </details>
    <details>
    <summary>Store</summary>
      <p>Deletar uma loja</p>
      <img align="center" width='500' src='./imgs/delete-store.png'>
    </details>
     <details>
    <summary>Persons</summary>
      <p>Deletar um tipo de pessoa</p>
      <img align="center" width='500' src='./imgs/delete-persons.png'>
    </details>
    <details>
    <summary>Sales</summary>
      <p>Deletar uma venda</p>
      <img align="center" width='500' src='./imgs/delete-persons.png'>
    </details>
  </details>
