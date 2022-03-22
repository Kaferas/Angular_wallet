import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChrisComponentComponent } from './chris-component.component';

describe('ChrisComponentComponent', () => {
  let component: ChrisComponentComponent;
  let fixture: ComponentFixture<ChrisComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChrisComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChrisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
