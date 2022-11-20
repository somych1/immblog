import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I765Component } from './i765.component';

describe('I765Component', () => {
  let component: I765Component;
  let fixture: ComponentFixture<I765Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I765Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
