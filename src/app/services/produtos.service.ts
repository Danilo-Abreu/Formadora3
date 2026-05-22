import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Definição exata da estrutura que o TypeScript precisa ler
export interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  // Criamos o fluxo de dados (Subject) que vai avisar as páginas quando os produtos mudarem
  private produtosSubject = new BehaviorSubject<Produto[]>([]);
  produtos$ = this.produtosSubject.asObservable();

  constructor(private http: HttpClient) {
    this.carregarProdutos();
  }

  // Busca o arquivo JSON da pasta assets e distribui para o app inteiro
  private carregarProdutos() {
    this.http.get<{ produtos: Produto[] }>('assets/produtos.json').subscribe({
      next: (resposta) => {
        if (resposta && resposta.produtos) {
          this.produtosSubject.next(resposta.produtos);
        }
      },
      error: (erro) => {
        console.error('Erro ao carregar o arquivo produtos.json:', erro);
      }
    });
  }
}