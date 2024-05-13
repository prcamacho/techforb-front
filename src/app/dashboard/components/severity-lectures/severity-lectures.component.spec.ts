import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverityLecturesComponent } from './severity-lectures.component';

describe('SeverityLecturesComponent', () => {
  let component: SeverityLecturesComponent;
  let fixture: ComponentFixture<SeverityLecturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeverityLecturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeverityLecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
