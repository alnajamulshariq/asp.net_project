import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimCertificationComponent } from './claim-certification.component';

describe('ClaimCertificationComponent', () => {
  let component: ClaimCertificationComponent;
  let fixture: ComponentFixture<ClaimCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimCertificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaimCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
