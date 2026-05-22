import { Component } from '@angular/core';
// 🌟 CORRIGIDO: Removido o IonRouterOutlet desta linha de importação
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  // 🌟 CORRIGIDO: Removido o IonRouterOutlet do array de imports também
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  constructor() {
    addIcons({ triangle, ellipse, square });
  }
}