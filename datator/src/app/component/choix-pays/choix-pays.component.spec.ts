import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixPaysComponent } from './choix-pays.component';

describe('ChoixPaysComponent', () => {
  let component: ChoixPaysComponent;
  let fixture: ComponentFixture<ChoixPaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixPaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
