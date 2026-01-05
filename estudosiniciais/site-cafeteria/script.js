const produtos = [
    {
        id: 1,
        nome: "Café Expresso",
        preço: 15.99,
        preçoAntigo: 20.99,
        imagem: "./img/menu-1.png"
    },
    {
        id: 2,
        nome: "Cappuccino",
        preço: 19.99,
        preçoAntigo: 22.99,
        imagem: "./img/menu-2.png"
    },
    {
        id: 3,
        nome: "Latte",
        preço: 18.99,
        preçoAntigo: 23.99,
        imagem: "./img/menu-3.png"
    },
    {
        id: 4,
        nome: "Cafe-Latte",
        preço: 23.97,
        preçoAntigo: 25.99,
        imagem: "./img/menu-4.png"
    },{
        id: 5,
        nome: "Cafe torrado",
        preço: 12.99,
        preçoAntigo: 19.99,
        imagem: "./img/menu-5.png"
    },{
        id: 6,
        nome: "cafe gelado",
        preço: 15.97,
        preçoAntigo: 19.99,
        imagem: "./img/menu-6.png"
    },
];
let carrinho = [];

console.log(produtos);

const menuContainer = document.getElementById("menu-container");

produtos.forEach(produto => {
    const box = document.createElement("div");
    box.classList.add("box");

    box.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <div class="price">
            R$ ${produto.preço.toFixed(2)} <span>R$ ${produto.preçoAntigo.toFixed(2)}</span>
        </div>
        <button class="btn" data-id="${produto.id}">Adicionar ao Carrinho</button>
        `;
        menuContainer.appendChild(box);

        const botao = box.querySelector("button");
        botao.addEventListener("click", () => {
            adicionarAoCarrinho(produto.id);
        });
});
function adicionarAoCarrinho(idProduto) {
    const produtoSelecionado = produtos.find(produto => produto.id === idProduto);
    carrinho.push(produtoSelecionado);
    console.log("Carrinho atual:", carrinho);
}
