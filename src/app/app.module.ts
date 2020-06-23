import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemCounterComponent } from './item-counter/item-counter.component';
import { VenderReceitaComponent } from './vender-receita/vender-receita.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCounterComponent,
    VenderReceitaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
