import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
}

@Injectable({
  providedIn: 'root', // serviço disponível em toda a aplicação
})
export class ProdutosService {
  // BehaviorSubject guarda o valor atual da lista de produtos.
  private produtosSubject = new BehaviorSubject<Produto[]>([]);
  // Observable público usado pelos componentes para receber atualizações.
  produtos$ = this.produtosSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadProdutos();
  }

  // Carrega o JSON de produtos e atualiza o BehaviorSubject.
  private loadProdutos() {
    this.http.get<Produto[]>('assets/produtos.json').subscribe({
      next: (produtos) => this.produtosSubject.next(produtos),
      error: () => this.produtosSubject.next([]),
    });
  }

  // Retorna a lista atual sem precisar assinar o Observable.
  getProdutos(): Produto[] {
    return this.produtosSubject.value;
  }
}
