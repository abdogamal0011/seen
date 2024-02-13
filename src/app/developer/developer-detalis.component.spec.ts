import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperDetalisComponent } from './developer-detalis.component';

describe('DeveloperDetalisComponent', () => {
  let component: DeveloperDetalisComponent;
  let fixture: ComponentFixture<DeveloperDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperDetalisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloperDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
