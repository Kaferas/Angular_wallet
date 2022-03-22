import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonReadComponent } from './button-read.component';

describe('ButtonReadComponent', () => {
  let component: ButtonReadComponent;
  let fixture: ComponentFixture<ButtonReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
