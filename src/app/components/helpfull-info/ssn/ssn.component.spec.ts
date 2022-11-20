import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsnComponent } from './ssn.component';

describe('SsnComponent', () => {
  let component: SsnComponent;
  let fixture: ComponentFixture<SsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
