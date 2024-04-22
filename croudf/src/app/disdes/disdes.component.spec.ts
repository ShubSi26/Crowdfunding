import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisdesComponent } from './disdes.component';

describe('DisdesComponent', () => {
  let component: DisdesComponent;
  let fixture: ComponentFixture<DisdesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisdesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
