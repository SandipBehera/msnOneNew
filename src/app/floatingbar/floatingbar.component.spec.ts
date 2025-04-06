import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingbarComponent } from './floatingbar.component';

describe('FloatingbarComponent', () => {
  let component: FloatingbarComponent;
  let fixture: ComponentFixture<FloatingbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
