import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1child2Component } from './test1child2.component';

describe('Test1child2Component', () => {
  let component: Test1child2Component;
  let fixture: ComponentFixture<Test1child2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test1child2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
