import { Injectable } from '@angular/core';
import { Carrinho } from '../models/carrinho.model';
import { ItemCarrinho } from '../models/item-carrinho.model';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private carrinho: Carrinho = new Carrinho([]);

  constructor() { }

  adicionar(produto: Produto) {
    const index = this.carrinho.itens.findIndex(
      item => item.produto.id === produto.id
    );
    if (index > -1) {
      this.carrinho.itens[index].quantidade++;
    } else {
      const item = new ItemCarrinho(produto, 1);
      this.carrinho.itens.push(item);
    }
    console.log("CARRINHO: ", this.carrinho);
  }
  get total() {
    return this.carrinho.itens
      .map((item: ItemCarrinho) => item.produto.preco * item.quantidade)
      .reduce((acc: number, preco: number) => acc + preco);
  }
  get quantidade() {
    if (this.carrinho.itens.length ===0) {
      return 0;
    }
      return this.carrinho.itens
      .map((item: ItemCarrinho) => item.quantidade)
      .reduce((acc: number, quantidade: number) => acc + quantidade);
  }
  get itens() {
    return this.carrinho.itens;
  }
}
