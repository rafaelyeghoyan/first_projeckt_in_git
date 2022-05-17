import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProektsComponent } from './proekts.component';

describe('ProektsComponent', () => {
  let component: ProektsComponent;
  let fixture: ComponentFixture<ProektsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProektsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProektsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
