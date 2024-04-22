import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprojectsComponent } from './updateprojects.component';

describe('UpdateprojectsComponent', () => {
  let component: UpdateprojectsComponent;
  let fixture: ComponentFixture<UpdateprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateprojectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
