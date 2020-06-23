import { ItemCounterService } from './../item-counter.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-item-counter',
  templateUrl: './item-counter.component.html',
  styleUrls: ['./item-counter.component.css']
})
export class ItemCounterComponent implements OnInit {
  @Input() item: string;
  quantidade;

  constructor(private itemCounter: ItemCounterService) { }

  ngOnInit() {
    this.itemCounter.watchStorage().subscribe((data:string) => {
      this.quantidade = this.itemCounter.getQuantidade(this.item);
    });
    this.quantidade = this.itemCounter.getQuantidade(this.item);
  }

  increment() {
    this.itemCounter.adicionaQuantidade(this.item);
  }

}
