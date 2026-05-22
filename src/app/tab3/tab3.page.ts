import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// 🌟 IMPORTANTE: Importamos o FormsModule para o [(ngModel)] funcionar perfeitamente
import { FormsModule } from '@angular/forms';
// 🌟 ADICIONADO: IonInput junto com os outros componentes do Ionic
import { 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle,  
  IonItem, 
  IonLabel, 
  IonSpinner, 
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput
} from '@ionic/angular/standalone';
import { ProdutosService, Produto } from '../services/produtos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, // 🌟 Adicionado aqui nos imports
    IonContent, 
    IonHeader, 
    IonToolbar, 
    IonTitle,  
    IonItem, 
    IonLabel,
    IonSpinner,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonInput // 🌟 Adicionado aqui nos imports
  ]
})
export class Tab3Page implements OnInit {
  produtos: Produto[] = [];
  
  // 🌟 PROPRIEDADES QUE O SEU HTML ESTAVA SENTINDO FALTA:
  mostrar: boolean = false; // Controla se a lista aparece ou some
  filtro: string = '';      // Guarda o texto digitado na busca

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {
    this.produtosService.produtos$.subscribe(dados => {
      this.produtos = dados;
    });
  }

  // 🌟 MÉTODOS DE CONTROLAR A EXIBIÇÃO:
  mostrarProdutos() {
    this.mostrar = true;
  }

  ocultarProdutos() {
    this.mostrar = false;
    this.filtro = ''; // Limpa o campo de busca ao ocultar
  }

  // 🌟 GESTOR DE FILTRO: 
  // Captura a lista original de produtos e filtra pelo nome de acordo com o que foi digitado
  get produtosFiltrados(): Produto[] {
    if (!this.filtro.trim()) {
      return this.produtos;
    }
    return this.produtos.filter(produto => 
      produto.nome.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}