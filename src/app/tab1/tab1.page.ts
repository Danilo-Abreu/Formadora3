import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
// IonicModule traz componentes visuais do Ionic, e CommonModule traz diretivas Angular básicas.

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class Tab1Page {
  // Tab1 é a página inicial do trabalho.
  // Exibe os dados do aluno e o botão para acessar a aba de produtos.

  constructor() {}

}