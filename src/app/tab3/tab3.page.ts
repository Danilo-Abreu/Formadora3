import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto, ProdutosService } from '../services/produtos.service';

// Tab3 exibe a lista de produtos, permite mostrar/ocultar e filtrar por nome.
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab3Page {

  produtos: Produto[] = [];
  mostrar = false;
  filtro = '';

  constructor(private produtosService: ProdutosService) {
    this.produtosService.produtos$.subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  get produtosFiltrados() {
    const termo = this.filtro.trim().toLowerCase();
    return termo
      ? this.produtos.filter((produto) => produto.nome.toLowerCase().includes(termo))
      : this.produtos;
  }

  mostrarProdutos() {
    this.mostrar = true;
  }

  ocultarProdutos() {
    this.mostrar = false;
  }
}