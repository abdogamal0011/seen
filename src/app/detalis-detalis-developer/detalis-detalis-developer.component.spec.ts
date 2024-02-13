import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalisDetalisDeveloperComponent } from './detalis-detalis-developer.component';

describe('DetalisDetalisDeveloperComponent', () => {
  let component: DetalisDetalisDeveloperComponent;
  let fixture: ComponentFixture<DetalisDetalisDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalisDetalisDeveloperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalisDetalisDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
