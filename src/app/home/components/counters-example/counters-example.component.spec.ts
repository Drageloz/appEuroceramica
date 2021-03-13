import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountersExampleComponent } from './counters-example.component';

describe('CountersExampleComponent', () => {
  let component: CountersExampleComponent;
  let fixture: ComponentFixture<CountersExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountersExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountersExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
