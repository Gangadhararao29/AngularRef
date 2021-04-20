import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehSubjectComponent } from './beh-subject.component';

describe('BehSubjectComponent', () => {
  let component: BehSubjectComponent;
  let fixture: ComponentFixture<BehSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
