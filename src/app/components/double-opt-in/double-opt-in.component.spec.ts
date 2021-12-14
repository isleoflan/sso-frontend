import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DoubleOptInComponent} from './double-opt-in.component';

describe('DoubleOptInComponent', () => {
  let component: DoubleOptInComponent;
  let fixture: ComponentFixture<DoubleOptInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoubleOptInComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleOptInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
