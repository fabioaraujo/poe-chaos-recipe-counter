import { ItemCounterService } from './../item-counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vender-receita',
  templateUrl: './vender-receita.component.html',
  styleUrls: ['./vender-receita.component.css']
})
export class VenderReceitaComponent implements OnInit {
  chaos: number;
  receitasDisponiveisParaVenda: number;

  constructor(private itemCounter: ItemCounterService) { }

  ngOnInit() {
    this.chaos = parseInt(localStorage.getItem('chaos_orbs'));
    if (isNaN(this.chaos)) {
      this.chaos = 0;
    }
    this.atualizaReceitasDisponiveis();
    this.itemCounter.watchStorage().subscribe((data:string) => {
      this.atualizaReceitasDisponiveis();
    });
  }

  atualizaReceitasDisponiveis() {
    let quantidadeMaxima = -1;
    for (const i in this.itemCounter.itens) {
      const item = this.itemCounter.itens[i];
      let quantidadeItens = this.itemCounter.getQuantidade(item);
      if ("Ring" === item) {
        quantidadeItens = Math.floor(quantidadeItens / 2);
      }
     if (quantidadeMaxima == -1 || quantidadeMaxima > quantidadeItens){
        quantidadeMaxima = quantidadeItens;
     }
    }
    this.receitasDisponiveisParaVenda = quantidadeMaxima;
  }

  venderReceita(){
    if (this.receitasDisponiveisParaVenda > 0) {
      this.itemCounter.venderReceita();
      this.chaos += 2;
      localStorage.setItem('chaos_orbs', this.chaos.toString());
    }
  }

}
