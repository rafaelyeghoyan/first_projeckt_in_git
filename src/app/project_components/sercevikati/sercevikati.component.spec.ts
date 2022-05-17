import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SercevikatiComponent } from './sercevikati.component';

describe('SercevikatiComponent', () => {
  let component: SercevikatiComponent;
  let fixture: ComponentFixture<SercevikatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SercevikatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SercevikatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
