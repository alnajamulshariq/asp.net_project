import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFaqsComponent } from './edit-faqs.component';

describe('EditFaqsComponent', () => {
  let component: EditFaqsComponent;
  let fixture: ComponentFixture<EditFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFaqsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
