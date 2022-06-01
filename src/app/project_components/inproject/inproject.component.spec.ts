import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InprojectComponent } from './inproject.component';

describe('InprojectComponent', () => {
  let component: InprojectComponent;
  let fixture: ComponentFixture<InprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
