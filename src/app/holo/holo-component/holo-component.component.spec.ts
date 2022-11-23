import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoloComponentComponent } from './holo-component.component';

describe('HoloComponentComponent', () => {
  let component: HoloComponentComponent;
  let fixture: ComponentFixture<HoloComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoloComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoloComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
