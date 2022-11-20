import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I130Component } from './i130.component';

describe('I130Component', () => {
  let component: I130Component;
  let fixture: ComponentFixture<I130Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I130Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
