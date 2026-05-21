import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root', // seletor HTML usado no index.html para montar o app
  standalone: true, // componente independente sem precisar de NgModule
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet], // componentes usados no template desta página
})
export class AppComponent {
  constructor() {}
}
