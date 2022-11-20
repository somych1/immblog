import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N400Component } from './n400.component';

describe('N400Component', () => {
  let component: N400Component;
  let fixture: ComponentFixture<N400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N400Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
