import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNewPlantComponent } from './popup-new-plant.component';

describe('PopupNewPlantComponent', () => {
  let component: PopupNewPlantComponent;
  let fixture: ComponentFixture<PopupNewPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupNewPlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupNewPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
