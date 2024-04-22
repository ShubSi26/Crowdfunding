import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodycompComponent } from './bodycomp.component';

describe('BodycompComponent', () => {
  let component: BodycompComponent;
  let fixture: ComponentFixture<BodycompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodycompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodycompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
