import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivedayComponent } from './fiveday.component';

describe('FivedayComponent', () => {
  let component: FivedayComponent;
  let fixture: ComponentFixture<FivedayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivedayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
