import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixCategoriesComponent } from './choix-categories.component';

describe('ChoixCategoriesComponent', () => {
  let component: ChoixCategoriesComponent;
  let fixture: ComponentFixture<ChoixCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
