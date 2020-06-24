import { ItemCounterService } from './../item-counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vender-receita',
  templateUrl: './vender-receita.component.html',
  styleUrls: ['./vender-receita.component.css']
})
export class VenderReceitaComponent implements OnInit {
  chaos: number;

  constructor(private itemCounter: ItemCounterService) { }

  ngOnInit() {
    this.chaos = parseInt(localStorage.getItem('chaos_orbs'));
    if (isNaN(this.chaos)) {
      this.chaos = 0;
    }
  }

  venderReceita(){
    this.itemCounter.venderReceita();
    this.chaos += 2;
    localStorage.setItem('chaos_orbs', this.chaos.toString());
  }

}
