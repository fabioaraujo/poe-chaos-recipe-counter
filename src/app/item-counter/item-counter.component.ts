import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-counter',
  templateUrl: './item-counter.component.html',
  styleUrls: ['./item-counter.component.css']
})
export class ItemCounterComponent implements OnInit {
  @Input() item: string;
  quantidade: number;

  constructor() { }

  ngOnInit() {
    this.quantidade = parseInt(localStorage.getItem(this.item));
    if (isNaN(this.quantidade)) {
      this.quantidade = 0;
    }
  }

  increment() {
    this.quantidade++;
    localStorage.setItem(this.item, this.quantidade.toString());
  }

}
