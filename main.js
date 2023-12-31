"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto_1 = require("./src/model/Produto");
var CarrinhoDeCompra_1 = require("./src/model/CarrinhoDeCompra");
var produto1 = new Produto_1.Produto("meia", 12.50);
var produto2 = new Produto_1.Produto("camisa", 62.75);
var produto3 = new Produto_1.Produto("bermuda", 50.48);
var produto4 = new Produto_1.Produto("cal\u00E7a", 150.59);
var produto5 = new Produto_1.Produto("bon\u00E9", 35.99);
var carrinhosDeCompras = new CarrinhoDeCompra_1.CarrinhoDeCompra();
carrinhosDeCompras.inserirProdutos(produto1, produto2, produto3, produto4, produto5);
console.log("Quatidade de itens no carrinho: ".concat(carrinhosDeCompras.quantidadeProdutos()));
console.log("Valor Total: ".concat(carrinhosDeCompras.valorTotal()));
