import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InproektsComponent } from './inproekts.component';

describe('InproektsComponent', () => {
  let component: InproektsComponent;
  let fixture: ComponentFixture<InproektsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InproektsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InproektsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
