import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAboutContantComponent } from './update-about-contant.component';

describe('UpdateAboutContantComponent', () => {
  let component: UpdateAboutContantComponent;
  let fixture: ComponentFixture<UpdateAboutContantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAboutContantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAboutContantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
