import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderReceitaComponent } from './vender-receita.component';

describe('VenderReceitaComponent', () => {
  let component: VenderReceitaComponent;
  let fixture: ComponentFixture<VenderReceitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderReceitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
