import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsManagementsComponent } from './faqs-managements.component';

describe('FaqsManagementsComponent', () => {
  let component: FaqsManagementsComponent;
  let fixture: ComponentFixture<FaqsManagementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqsManagementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqsManagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
