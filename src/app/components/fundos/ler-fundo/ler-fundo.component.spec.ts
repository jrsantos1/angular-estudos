import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LerFundoComponent } from './ler-fundo.component';

describe('LerFundoComponent', () => {
  let component: LerFundoComponent;
  let fixture: ComponentFixture<LerFundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LerFundoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LerFundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
