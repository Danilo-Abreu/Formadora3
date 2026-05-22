import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonButton, 
  IonSpinner 
} from '@ionic/angular/standalone';
import { ProdutosService, Produto } from '../services/produtos.service';

@Component({
  selector: 'app-tab2', // 👈 Garantir que está app-tab2
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonContent, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonButton, 
    IonSpinner
  ]
})
export class Tab2Page implements OnInit {
  
  listaProdutos = signal<Produto[]>([]);
  indice = signal<number>(0);

  produtoAtual = computed(() => {
    const lista = this.listaProdutos();
    const idx = this.indice();
    return lista.length > 0 ? lista[idx] : null;
  });

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {
    this.produtosService.produtos$.subscribe(dados => {
      if (dados && dados.length > 0) {
        this.listaProdutos.set(dados);
        this.indice.set(0);
      }
    });
  }

  proximo() {
    if (this.indice() < this.listaProdutos().length - 1) {
      this.indice.update(valor => valor + 1);
    }
  }

  anterior() {
    if (this.indice() > 0) {
      this.indice.update(valor => valor - 1);
    }
  }
}