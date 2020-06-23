import { ItemCounterService } from './../item-counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vender-receita',
  templateUrl: './vender-receita.component.html',
  styleUrls: ['./vender-receita.component.css']
})
export class VenderReceitaComponent implements OnInit {

  constructor(private itemCounter: ItemCounterService) { }

  ngOnInit() {
  }

  venderReceita(){
    this.itemCounter.venderReceita();
  }

}
