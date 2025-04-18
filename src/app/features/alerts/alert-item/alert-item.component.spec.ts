import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertItemComponent } from './alert-item.component';

describe('AlertItemComponent', () => {
  let component: AlertItemComponent;
  let fixture: ComponentFixture<AlertItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
