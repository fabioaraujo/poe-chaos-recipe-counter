import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemCounterService {
  itens = ['Helmet',
            'Weapon',
            'Armor',
            'Gloves',
            'Boots',
            'Belt',
            'Amulet',
            'Ring',
          ];
private storageSub = new Subject<String>();

  constructor() { }

  getQuantidade(item: string): number {
    let quantidade = parseInt(localStorage.getItem(item));
    if (isNaN(quantidade)) {
      quantidade = 0;
    }
    return quantidade;
  }

  adicionaQuantidade(item: string) {
    let quantidade = this.getQuantidade(item);
    quantidade++;
    localStorage.setItem(item, quantidade.toString());
    this.storageSub.next('changed');
  }

  diminuiQuantidade(item: string) {
    let quantidade = this.getQuantidade(item);
    quantidade--;
    localStorage.setItem(item, quantidade.toString());
    this.storageSub.next('changed');
  }

  venderReceita(){
    for (const i in this.itens) {
      if ("Ring" === this.itens[i]) {
        this.diminuiQuantidade(this.itens[i]);
      }
      this.diminuiQuantidade(this.itens[i]);
    }
  }

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }
}
