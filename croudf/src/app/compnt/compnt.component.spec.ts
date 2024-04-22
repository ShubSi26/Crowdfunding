import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompntComponent } from './compnt.component';

describe('CompntComponent', () => {
  let component: CompntComponent;
  let fixture: ComponentFixture<CompntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompntComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
