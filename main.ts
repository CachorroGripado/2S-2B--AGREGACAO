import { Produto } from "./src/model/Produto";
import { CarrinhoDeCompra } from "./src/model/CarrinhoDeCompra";

const produto1 = new Produto(`meia`, 12.50);
const produto2 = new Produto(`camisa`, 62.75);
const produto3 = new Produto(`bermuda`, 50.48);
const produto4 = new Produto(`calça`, 150.59);
const produto5 = new Produto(`boné`, 35.99);

const carrinhosDeCompras = new CarrinhoDeCompra();
carrinhosDeCompras.inserirProdutos(produto1, produto2, produto3, produto4, produto5);
console.log(`Quatidade de itens no carrinho: ${carrinhosDeCompras.quantidadeProdutos()}`);
console.log(`Valor Total: ${carrinhosDeCompras.valorTotal()}`);