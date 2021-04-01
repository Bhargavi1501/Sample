import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1childComponent } from './test1child.component';

describe('Test1childComponent', () => {
  let component: Test1childComponent;
  let fixture: ComponentFixture<Test1childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test1childComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
