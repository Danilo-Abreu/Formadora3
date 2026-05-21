import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// bootstrapApplication inicializa o Angular em modo standalone com AppComponent como raiz.
bootstrapApplication(AppComponent, {
  providers: [
    // Usa a estratégia de cache de rota do Ionic para preservar a navegação entre páginas.
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // Fornece dependências do Ionic para componentes standalone.
    provideIonicAngular(),
    // Configura o roteador da aplicação com pré-carregamento de módulos.
    provideRouter(routes, withPreloading(PreloadAllModules)),
    // Habilita o HttpClient para requisições HTTP ao carregar produtos.
    provideHttpClient(),
  ],
});
