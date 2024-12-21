import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEventManagementComponent } from './news-event-management.component';

describe('NewsEventManagementComponent', () => {
  let component: NewsEventManagementComponent;
  let fixture: ComponentFixture<NewsEventManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsEventManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsEventManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
