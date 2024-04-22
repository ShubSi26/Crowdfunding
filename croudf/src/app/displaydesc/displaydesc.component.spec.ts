import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydescComponent } from './displaydesc.component';

describe('DisplaydescComponent', () => {
  let component: DisplaydescComponent;
  let fixture: ComponentFixture<DisplaydescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplaydescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplaydescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
