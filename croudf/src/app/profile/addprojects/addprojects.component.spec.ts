import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojectsComponent } from './addprojects.component';

describe('AddprojectsComponent', () => {
  let component: AddprojectsComponent;
  let fixture: ComponentFixture<AddprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddprojectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
