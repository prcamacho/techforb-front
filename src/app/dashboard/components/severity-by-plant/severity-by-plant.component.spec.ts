import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverityByPlantComponent } from './severity-by-plant.component';

describe('SeverityByPlantComponent', () => {
  let component: SeverityByPlantComponent;
  let fixture: ComponentFixture<SeverityByPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeverityByPlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeverityByPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
