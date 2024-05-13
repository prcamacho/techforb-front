import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditPlantComponent } from './popup-edit-plant.component';

describe('PopupEditPlantComponent', () => {
  let component: PopupEditPlantComponent;
  let fixture: ComponentFixture<PopupEditPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupEditPlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupEditPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
