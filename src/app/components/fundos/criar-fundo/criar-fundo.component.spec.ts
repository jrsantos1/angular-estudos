import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFundoComponent } from './criar-fundo.component';

describe('CriarFundoComponent', () => {
  let component: CriarFundoComponent;
  let fixture: ComponentFixture<CriarFundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarFundoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarFundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
