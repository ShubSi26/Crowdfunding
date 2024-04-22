import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayprojectsComponent } from './displayprojects.component';

describe('DisplayprojectsComponent', () => {
  let component: DisplayprojectsComponent;
  let fixture: ComponentFixture<DisplayprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayprojectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
