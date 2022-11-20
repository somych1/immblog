import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I485Component } from './i485.component';

describe('I485Component', () => {
  let component: I485Component;
  let fixture: ComponentFixture<I485Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I485Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
