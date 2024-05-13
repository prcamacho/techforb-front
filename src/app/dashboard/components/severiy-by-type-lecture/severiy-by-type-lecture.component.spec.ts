import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeveriyByTypeLectureComponent } from './severiy-by-type-lecture.component';

describe('SeveriyByTypeLectureComponent', () => {
  let component: SeveriyByTypeLectureComponent;
  let fixture: ComponentFixture<SeveriyByTypeLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeveriyByTypeLectureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeveriyByTypeLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
