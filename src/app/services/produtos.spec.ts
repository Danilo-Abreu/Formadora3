/// <reference types="jasmine" />
import { TestBed } from '@angular/core/testing';
import { ProdutosService } from './produtos.service';

describe('ProdutosService', () => {
  let service: ProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return produtos', () => {
    const produtos = service.getProdutos();
    expect(produtos.length).toBeGreaterThan(0);
  });
});