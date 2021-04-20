import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsscourseComponent } from './csscourse.component';

describe('CsscourseComponent', () => {
  let component: CsscourseComponent;
  let fixture: ComponentFixture<CsscourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsscourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsscourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
