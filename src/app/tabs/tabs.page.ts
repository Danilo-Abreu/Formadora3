import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  standalone: true, // componente independente para a navegação por abas
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  // Usamos o EnvironmentInjector para que o Ionic possa injetar dependências corretamente.
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    // Registra os ícones usados nos botões das abas.
    addIcons({ triangle, ellipse, square });
  }
}
