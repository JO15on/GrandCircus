import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadLibFormComponent } from './mad-lib-form.component';

describe('MadLibFormComponent', () => {
  let component: MadLibFormComponent;
  let fixture: ComponentFixture<MadLibFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadLibFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadLibFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
