import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsEventComponent } from './add-news-event.component';

describe('AddNewsEventComponent', () => {
  let component: AddNewsEventComponent;
  let fixture: ComponentFixture<AddNewsEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewsEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
