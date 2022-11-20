import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversLicenceComponent } from './drivers-licence.component';

describe('DriversLicenceComponent', () => {
  let component: DriversLicenceComponent;
  let fixture: ComponentFixture<DriversLicenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversLicenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriversLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
