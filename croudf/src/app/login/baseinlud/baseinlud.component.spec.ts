import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseinludComponent } from './baseinlud.component';

describe('BaseinludComponent', () => {
  let component: BaseinludComponent;
  let fixture: ComponentFixture<BaseinludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseinludComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseinludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
