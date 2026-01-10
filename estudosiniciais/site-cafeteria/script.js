const produtos = [
    {
        id: 1,
        nome: "Café Expresso",
        preco: 15.99,
        precoAntigo: 20.99,
        imagem: "./img/menu-1.png"
    },
    {
        id: 2,
        nome: "Cappuccino",
        preco: 19.99,
        precoAntigo: 22.99,
        imagem: "./img/menu-2.png"
    },
    {
        id: 3,
        nome: "Latte",
        preco: 18.99,
        precoAntigo: 23.99,
        imagem: "./img/menu-3.png"
    },
    {
        id: 4,
        nome: "Cafe-Latte",
        preco: 23.97,
        precoAntigo: 25.99,
        imagem: "./img/menu-4.png"
    },{
        id: 5,
        nome: "Cafe torrado",
        preco: 12.99,
        precoAntigo: 19.99,
        imagem: "./img/menu-5.png"
    },{
        id: 6,
        nome: "cafe gelado",
        preco: 15.97,
        precoAntigo: 19.99,
        imagem: "./img/menu-6.png"
    },
];
let carrinho = [];

console.log(produtos);

const menuContainer = document.getElementById("menu-container");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");

produtos.forEach(produto => {
    const box = document.createElement("div");
    box.classList.add("box");

    box.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <div class="price">
            R$ ${produto.preco.toFixed(2)} <span>R$ ${produto.precoAntigo.toFixed(2)}</span>
        </div>
        <button class="btn" data-id="${produto.id}">Adicionar ao Carrinho</button>
        `;
        const botao = box.querySelector("button");
        botao.addEventListener("click", () => {
            adicionarAoCarrinho(produto.id);
        });

        menuContainer.appendChild(box); 
});
function adicionarAoCarrinho(idProduto) {
    const produtoSelecionado = produtos.find(produto => produto.id === idProduto);
    carrinho.push(produtoSelecionado);
    renderizarCarrinho();
}

function renderizarCarrinho() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    carrinho.forEach(produto => {
        const linha = document.createElement("p");
        linha.style.color = "white";
        linha.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
        cartItemsContainer.appendChild(linha);
        total += produto.preco;
    });
    cartTotalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}
