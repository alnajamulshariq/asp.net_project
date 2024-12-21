import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewsEventComponent } from './edit-news-event.component';

describe('EditNewsEventComponent', () => {
  let component: EditNewsEventComponent;
  let fixture: ComponentFixture<EditNewsEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditNewsEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditNewsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
