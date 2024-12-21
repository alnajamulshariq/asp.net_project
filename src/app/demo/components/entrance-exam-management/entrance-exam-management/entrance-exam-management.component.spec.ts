import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranceExamManagementComponent } from './entrance-exam-management.component';

describe('EntranceExamManagementComponent', () => {
  let component: EntranceExamManagementComponent;
  let fixture: ComponentFixture<EntranceExamManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntranceExamManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntranceExamManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
