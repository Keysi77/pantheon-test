import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectancyComponent } from './expectancy.component';

describe('ExpectancyComponent', () => {
  let component: ExpectancyComponent;
  let fixture: ComponentFixture<ExpectancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpectancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpectancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
