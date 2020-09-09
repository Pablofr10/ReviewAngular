import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpoyeeComponent } from './list-empoyee.component';

describe('ListEmpoyeeComponent', () => {
  let component: ListEmpoyeeComponent;
  let fixture: ComponentFixture<ListEmpoyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmpoyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmpoyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
