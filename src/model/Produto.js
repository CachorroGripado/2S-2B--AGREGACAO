"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(_nome, _preco) {
        this.nome = _nome;
        this.preco = _preco;
    }
    Produto.prototype.setNome = function (_nome) {
        this.nome = _nome;
    };
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.setPreco = function (_preco) {
        this.preco = _preco;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    return Produto;
}());
exports.Produto = Produto;
