import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Produto, ProdutosService } from '../services/produtos.service';

// Tab2 mostra um produto por vez e permite navegar entre os itens.
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class Tab2Page {

  produtos: Produto[] = []; // lista de produtos carregada do serviço
  indice = 0; // índice do produto atualmente exibido

  constructor(private produtosService: ProdutosService) {
    // Assina o serviço para receber produtos assim que o JSON for carregado.
    this.produtosService.produtos$.subscribe((produtos) => {
      this.produtos = produtos;
      // Ajusta o índice se a lista mudar e ficar fora do intervalo.
      if (this.indice >= produtos.length) {
        this.indice = produtos.length - 1;
      }
    });
  }

  // Retorna o produto atual com base no índice.
  get produto() {
    return this.produtos[this.indice];
  }

  // Vai para o próximo produto se ainda houver itens.
  proximo() {
    if (this.indice < this.produtos.length - 1) {
      this.indice++;
    }
  }

  // Volta para o produto anterior se não estiver no primeiro.
  anterior() {
    if (this.indice > 0) {
      this.indice--;
    }
  }
}