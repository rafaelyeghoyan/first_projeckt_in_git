import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlavnayaComponent } from './glavnaya.component';

describe('GlavnayaComponent', () => {
  let component: GlavnayaComponent;
  let fixture: ComponentFixture<GlavnayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlavnayaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlavnayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
