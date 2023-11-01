"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrinhoDeCompra = void 0;
var CarrinhoDeCompra = /** @class */ (function () {
    function CarrinhoDeCompra() {
        this.produtos = [];
    }
    CarrinhoDeCompra.prototype.inserirProdutos = function () {
        var produtos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            produtos[_i] = arguments[_i];
        }
        for (var _a = 0, produtos_1 = produtos; _a < produtos_1.length; _a++) {
            var produto = produtos_1[_a];
            this.produtos.push(produto);
        }
    };
    CarrinhoDeCompra.prototype.quantidadeProdutos = function () {
        return this.produtos.length;
    };
    CarrinhoDeCompra.prototype.valorTotal = function () {
        return this.produtos.reduce(function (soma, produto) {
            return soma + produto.preco;
        }, 0);
    };
    return CarrinhoDeCompra;
}());
exports.CarrinhoDeCompra = CarrinhoDeCompra;
